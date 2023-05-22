import { makeObservable, observable, computed, action} from "mobx";
import config  from './AppConfig';
import axios from 'axios';
import JSEncrypt from 'jsencrypt';


export interface IUserProflie{
    userId:string;
    userName:string;
    password:string;
    isLogin:boolean;
    login:(userId:string,password:string)=>void;
    currentUser:string;
    token:string;
}
export interface IModules{
    id:string;
    component?:string;
    enable : boolean;
    path ?: string;
    mobileOnly ?:boolean;
    pcOnly ?:boolean;

}
class UserProflie implements IUserProflie{

    userId=""
    userName=""
    password=""
    isLogin=false
    publicKey="";
    token="";
    modules:IModules[]=[];

    login(userId: string,password: string){
        this.userId=userId;
        this.password=password;
        if(userId==="admin"){
            this.premission.push("image");
            this.premission.push("image_edit");
        }
        const promise=new Promise((resolve,reject)=>{
        this.getPulicKey().then(()=>{
            const queryUrl = config.loginUrl;
            const params={
                "phone":this.userId,
                "password":this.encrypt(this.password)
            };
            axios({
                 method: "post",
                 url: queryUrl,
                 headers: {
                   'Content-Type': 'application/json;charset=UTF-8'
                 },
                 data : JSON.stringify(params)
               }
             ).then((response)=>{
                if(response.data.statusCode===0){
                    this.token=response.data.data;
                    this.isLogin=true;
                    this.loginByToken();
                    localStorage["user-token"]=this.token;
                    resolve(this.token)
                }else if(response.data.errors.message){
                    reject(response.data.errors.message)
                }else{
                    reject("Fail to login");
                }
            });
            })
        });
        return promise;
    }

    get currentUser(){
        if(this.userName){
            return this.userName;
        }else{
            return "Login"
        }
    }

    premission=["chat","config","tips"];

    
    constructor() {
        makeObservable(this, {
            userId: observable,
            userName: observable,
            premission: observable,
            currentUser:computed,
            login: action,
            fetchModulesData: action.bound,
            loginByToken: action.bound
        })
        this.fetchModulesData().then(()=>{
            this.modules.forEach((item=>{
                if(item.enable){
                    if(item.pcOnly===true){
                        if(!config.isMobile){
                            this.premission.push(item.id);
                        }
                    }else{
                        this.premission.push(item.id);
                    }
                }
            }))
        })
        if(localStorage["user-token"]){
            this.token=localStorage["user-token"];
            this.loginByToken();
        }
    }

    loginByToken(){
        if(this.token){
            const queryUrl=config.userInfoUrl
            axios({
                method: "get",
                url: queryUrl,
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  'token':this.token
                }
              }
            ).then((response)=>{
               const data=response.data;
               if(data.statusCode===0){
                   this.isLogin=true;
                   this.userName=data.data.name;
                   this.userId=data.data.userId
                   this.premission.push("image");
                   //this.premission.push("image_edit");
               }else{
                   this.token="";
               }
           });
        }
    }

    getPulicKey(){
        const queryUrl=config.publicKeyUrl;
        const promise=new Promise((resolve,reject)=>{
            if(this.publicKey){
                resolve(this.publicKey);
            }
            axios({
                method: "get",
                url: queryUrl,
                headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response)=>{
                if(response.data.statusCode===0){
                    this.publicKey=response.data.data;
                    resolve(this.publicKey);
                }
            });
        });
        return promise;
    }


    encrypt(text: string) {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.publicKey);
        const encrypted = encrypt.encrypt(text);
        return encrypted;
    }


    fetchModulesData() {
        const self=this;
        return axios({
            method: "get",
            url: config.moduleUrl+"?uuid="+new Date().getTime(),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
          ).then((response)=>{
            if (response.data) {
                const data = response.data;
                if(data.data){
                    self.modules=data.data;
                }
              }
          });
    }
}

const userProflie=new UserProflie();
export default userProflie;
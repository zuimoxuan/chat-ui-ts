import { Avatar,Button,Divider,Popconfirm,Dropdown} from 'antd';
import type { MenuProps } from 'antd';
import './ChatList.css';
import { observer } from "mobx-react-lite";
import dayjs from 'dayjs';
import icon from './favicon-32x32.png';
import icon2 from './ai_image.png';
import { Input,Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import {IMessage,ISessionMenu} from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan,faCheck,faShare,faStar,faTools} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ChatShareSteps from '../chat-share-steps/ChatShareSteps';
import QueueAnim from 'rc-queue-anim';

type IProps ={
  store: IMessage
}


const ChatList: React.FC<IProps>  =({store}) => {

  const {t} = useTranslation();
  const [open,setOpen] = useState(false);
  const [currentChatId,setCurrentChatId] = useState<string>("");

  const buttonSize= "small"

  const clear= (key: string,e: any) =>{
    store.clear(key);
  }


  const formatDate=(date: string | number | dayjs.Dayjs | Date | null | undefined)=>{
    const dateFormat="MM-DD";
    const timeFormat="hh:mm:ss";
    const today = dayjs().startOf('day'); 
    const momentDate = dayjs(date)
    const isToday = momentDate.isSame(today, 'd')
    if(isToday){
      return dayjs(date).format(timeFormat);
    }else{
      return dayjs(date).format(dateFormat);
    }
  }

  const showChatNameEditor = (edit: boolean,key: string)=>{
    store.updateChatStatus(!edit,key);
  }

  const updateChatName = (e: { target: { value: string; }; stopPropagation: () => void; },key: string)=>{
    store.updateChatName(e.target.value,key);
    e.stopPropagation();
  }

  const share = (chatId:string)=>{
    setOpen(true);
    setCurrentChatId(chatId);
  }

  const triggerFavorite = (chatId:string)=>{
    store.triggerFavorite(chatId);

  }

  const handleCancel= ()=>{
    setOpen(false);
    setCurrentChatId("");
  }

  const dataSouce=store.sessionList.reverse();

  const getButtonList=(item:ISessionMenu): MenuProps['items']=>{
    return [
      {
        key: '1',
        label: (  <Button
          icon={<FontAwesomeIcon icon={faPaintbrush} />} size ={buttonSize} className="chat-session-action-button"
          onClick={()=>{showChatNameEditor(item.edit,item.key)}}
        >&nbsp;{t('Edit')}</Button>),
      },
      {
        key: '2',
        label: (<Button
          icon={<FontAwesomeIcon icon={faShare} />} size ={buttonSize} className="chat-session-action-button"
          onClick={()=>{share(item.key)}}
          >&nbsp;{t('Share')}</Button>),
      },
      {
        key: '3',
        label: (<Button
          icon={<FontAwesomeIcon icon={faStar} />} size ={buttonSize} className="chat-session-action-button"
          onClick={()=>{triggerFavorite(item.key)}}
          >&nbsp;{item.favorite?t('Remove'):t('Favorite')}</Button>),
      },
      {
        key: '4',
        label: (<Popconfirm
          placement="right"
          title={t('Message')}
          description={t('Are you want to delete the chat.')}
          onConfirm={(e)=>clear(item.key,e)}
          onCancel={(e)=>e?.stopPropagation()}
          okText={t<string>("Yes")}
          cancelText={t<string>("No")}
        >
           <Button onClick={(e)=>e.stopPropagation()} className="chat-session-action-button"
          icon={<FontAwesomeIcon icon={faTrashCan} />} size ={buttonSize}
          >&nbsp;{t('Delete')}</Button>
        </Popconfirm>),
      }
    ]
  };

  const renderItem=(item:ISessionMenu)=>{
    return item &&(<li key={item.key} className={(item.select?"selected":"")+ " session-list-item"}>
        {!item.edit?(
        <Link  className="session-item-link"  to={`/${store.type}/${item.key}`}>
        <div className="icon">
          <Avatar src={store.type==="chat"?icon:icon2} />
        </div>
        <div className="content">
            <div className="session-name">{item.name}</div>
            <div className="session-date">{formatDate(item.date)}</div>
        </div>              
        </Link>
        ):<Input defaultValue={item.name} onChange={(e)=>updateChatName(e,item.key)}
        addonAfter={
          <Button
          icon={<FontAwesomeIcon icon={faCheck}  />} size ={buttonSize}
          onClick={()=>{showChatNameEditor(item.edit,item.key)}} />
        }
        />
        }
        <div className="session-action-btn">
        {!item.edit && <span>
      <Dropdown trigger={['click']} menu={{ items:getButtonList(item)}} placement="bottomLeft">
        <Button icon={<FontAwesomeIcon icon={faTools} />} size ={buttonSize} />
      </Dropdown>
       </span>}
        </div>
      </li>
    );
  }

  const historyDataSouce=dataSouce.filter(item=>{
    return !!!item.favorite;
  })

  const favoriteDataSouce=dataSouce.filter(item=>{
    return !!item.favorite;
  })
  return  (<div className="session-list-wrapper">
    <Divider>Favorite</Divider>
    <QueueAnim  delay={500} interval={0} className="session-list-items" component="ul" type={['right', 'left']} leaveReverse>
        {favoriteDataSouce.map((item:ISessionMenu) =>renderItem(item))}
      </QueueAnim>
      <Divider>History</Divider>
      <QueueAnim  delay={500} interval={0} className="session-list-items" component="ul" type={['right', 'left']} leaveReverse>
        {historyDataSouce.map((item2:ISessionMenu) =>  renderItem(item2))}
      </QueueAnim>
      <Modal
        open={open}
        title={"Share History"}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose={true}
        width={900}
      >
         <ChatShareSteps sessionData={store.getChatInfoByChatId(currentChatId) as any}></ChatShareSteps>
      </Modal>
    </div>);
};
export default observer(ChatList);
import './main.css'
import React, { useEffect,useRef,useState } from 'react';
import {MessageItem} from '../index';
import { observer } from "mobx-react"
import { Card } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList' 
import ChatConfigList from '../chat-config-list/ChatConfigList'

const MessageItemChat = observer(({store,config,renderMessage}) => {

  const messagesEndRef =useRef(null);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    if(messagesEndRef && messagesEndRef.current && open===false){
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })




  return (<div className="message-list-wrapper-chat" style={{height:'100%'}}>
      <Card title={store.currentChatName}  
      extra={<ActionBtnList onOpen={onOpen} store={store} config={config}></ActionBtnList>} style={{ width: '100%',height:'100%',background:"#f0f0f0"}}>
      <ScrollToBottom>
          {store.data.map((item,key)=>{
          return item.isSys?(<MessageItem type={item.isUser?"user":"system"} key={key} content={renderMessage(item,store.type,key)}></MessageItem>):
          (<MessageItem type={"user"} key={key} content={renderMessage(item,store.type,key)}></MessageItem>)
          })}
          <div ref={messagesEndRef}/>
      </ScrollToBottom>
      <ChatConfigList config={config} open={open} onClose={onClose}></ChatConfigList>
      </Card>
      <div></div>
  </div>)
});
export default MessageItemChat;
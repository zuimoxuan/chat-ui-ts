import { observer } from "mobx-react-lite";
import { ISessiondata } from '../../store/MessageData';
import "./ChatHistorySharerPage.css";
import MessageItem from "../message-item/MessageItem";
import Markdown from "../markdown/Markdown";
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import chatConfig, { IChatAPIConfig } from "../../store/ChatConfig";

type IProps = {
  data: ISessiondata[];
  topic: string;
  time: Date;
  chatApiConfig?: IChatAPIConfig;
}

const ChatHistorySharer: React.FC<IProps> = observer(({ data, topic, time }) => {

  const { t } = useTranslation();

  return (<div className="sharer-review-page-content" id="sharer-review-page-content">
    <div className="sharer-review-page-summary">
      <div className="sharer-summary">
        <div className="sharer-summary-web-info">
          <h2 style={{ margin: 5 }}>ChatGPT Web</h2>
          <span style={{ margin: 10 }}>
            Url : <a href="https://fary.chat" style={{ color: '#fff' }}>fary.chat</a></span>
        </div>
        <div className="sharer-summary-params">
          <table>
            <tbody>
              {chatConfig.apiConfig && <tr><td>{t('Model')} : </td><td> {chatConfig.apiConfig.model}</td></tr>}
              <tr><td>{t('count')} : </td><td> {data.length}</td></tr>
              <tr><td>{t('topic')} : </td><td> {topic}</td></tr>
              <tr><td>{t('time')} : </td><td> {dayjs(time).format("DD/MM/YYYY")}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="sharer-review-page-message message-list-wrapper">
      {data.map((item, key) => {
        return item.isSys ? (<MessageItem index={key} item={item} type={"system"} key={key}
          content={<Markdown content={item.choices?.length ? item.choices[0].message.content : item.text + ""} />}></MessageItem>) :
          (<MessageItem type={"user"} key={key} index={key} readonly={true}
            content={item.text}></MessageItem>)
      })}
    </div>
  </div>)
})


export default ChatHistorySharer;
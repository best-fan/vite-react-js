import './index.css';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
const Message = (props) => {
  const { index } = props;
  return (
    <div className='message'>
      <h1>全局提示弹出：{index}</h1>
    </div>
  );
};
const messageList = [];
window.onShowMessage = () => {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'global-message ';
  messageContainer.style.top = `${messageList.length * 50 + 20}px`;
  document.body.appendChild(messageContainer);
  // 容器关联Message组件
  // 将容器注册为根组件
  const root = ReactDOM.createRoot(messageContainer);
  root.render(<Message index={messageList.length} />);
  messageList.push({
    root,
    messageContainer,
  });
  setTimeout(() => {
    const item = messageList.find((item) => item.messageContainer === messageContainer);
    item.root.unmount();
    document.body.removeChild(item.messageContainer);
    messageList.splice(messageList.indexOf(item), 1);
  }, 2000);
};

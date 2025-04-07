import './index.css';
const AdminPanel = () => {
  return (
    <div className='admin-panel'>
      <h1>Admin Panel</h1>
      <p>This is the admin panel.</p>
    </div>
  );
};
const LoginPanel = () => {
  return (
    <div className='login-panel'>
      <h1>Login Panel</h1>
      <p>This is the login panel.</p>
    </div>
  );
};

//条件渲染
const MainPanel = () => {
  const isShow = true;
  return <div>{isShow ? <AdminPanel /> : <LoginPanel />}</div>;
};

//条件渲染 li> 有一个 key 属性
const MainPanel2 = () => {
  let content;
  const isShow = false;
  content = isShow ? <AdminPanel /> : <LoginPanel />;
  // return <div>{isShow&&  <AdminPanel />}</div>;
  return <div>{content}</div>;
};

const UserList = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  // 方式一
  // return (
  //   <div className='user-list'>
  //     <h1>User List</h1>
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.id}>{user.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  //方式二
  const userList = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <div className='user-list'>
      <h1>User List</h1>
      <ul>{userList}</ul>
    </div>
  );
};

// 响应事件;
const ClickButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <button className='custom-btn' onClick={handleClick}>
      Click Me
    </button>
  );
};

import { useState } from 'react';
// 更新界面
const UpdateView = () => {
  // 按照惯例会像 [something, setSomething] 这样为它们命名
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='update-view' onClick={handleClick}>
      点击次数:{count}
    </div>
  );
};

//组件间共享数据
const MyShareBtn = ({ count, onClick }) => {
  return (
    <button className='my-share-btn' onClick={onClick}>
      点击次数{count}
    </button>
  );
};

export { MainPanel, MainPanel2, UserList, ClickButton, UpdateView, MyShareBtn };

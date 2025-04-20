import React, { useState } from 'react';
import './index.css';
import { useMemo } from 'react';

// React.memo 包裹组件 一般用于子组件  避免组件重新渲染

// React组件重新渲染条件
// 1、 组件中 props 发生变化
// 2、 组件中 state 发生变化
// 3、 组件中 useContext 发生变化

// React.memo 优化组件性能 只有props 发生变化时才重新渲染
const UserCard = React.memo((props) => {
  const { name, age, sex, phone } = props.user;
  console.log('UserCard子组件重新渲染');

  return (
    <div className='user-card'>
      <div className='user-card-title'>{name}</div>
      <div className='user-card-content'>
        <div className='user-card-content-item'>{age}</div>
        <div className='user-card-content-item'>{sex}</div>
        <div className='user-card-content-item'>{phone}</div>
      </div>
    </div>
  );
});

// 案例 使用React.memo优化子组件渲染
export const UseReactMemoDemo = () => {
  const [user, setUser] = useState({
    name: 'useMemo',
    age: 18,
    sex: '男',
    phone: '123456789',
  });
  const [input, setInput] = useState('');
  const changeUser = () => {
    setUser({
      ...user,
      name: '张三',
    });
  };
  return (
    <div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => changeUser()}>更新user</button>
      <UserCard user={user} />
    </div>
  );
};

// useMemo 优化函数计算结果  类似于vue中的 computed
// const fullName = useMemo(() => {
//   return `${firstName} ${lastName}`
// },[firstName,lastName])
export const UserMemoDemo = () => {
  const [firstName, setFirstName] = useState('张');
  const [lastName, setLastName] = useState('三');
  const fullName = useMemo(() => {
    console.log('fullName重新计算');

    return `${firstName}-${lastName}`;
  }, [firstName, lastName]);
  const [age, setAge] = useState(18);
  return (
    <div>
      <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>更新age</button>
      <p>{fullName}</p>
      <p>{age}</p>
    </div>
  );
};

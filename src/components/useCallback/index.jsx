import React, { useState, useCallback } from 'react';
import './index.css';

// useCallback 缓存函数
// useCallback(fn, [])
//    useMemo         和       useCallback   区别 功能一致，
//  返回缓存的值            返回缓存的函数
// 但是useMemo缓存的是函数的返回值，而useCallback缓存的是函数本身

const newMap = new WeakMap();
let count = 1;
let ageCount = 1;

export const UseCallbackDemo = () => {
  const [title, setTitle] = useState('useState');
  const [age, setAge] = useState(18);

  console.log('UseDemo重新创建');

  // 重新渲染方法会创建多次
  const changeTitle = (val) => {
    setTitle(val);
  };
  if (!newMap.get(changeTitle)) {
    newMap.set(changeTitle, count++);
  }
  const changeAge = useCallback((val) => {
    setAge(val);
  }, []);

  if (!newMap.get(changeAge)) {
    newMap.set(changeAge, ageCount++);
  }
  // 打印 创建次数
  console.log('newMap-changeTitle', newMap.get(changeTitle));
  console.log('newMap-changeAge', newMap.get(changeAge));

  return (
    <div>
      <p>UserDemo{title}</p>
      <input type='text' value={title} onChange={(e) => changeTitle(e.target.value)} />
      <button onClick={() => changeAge(age + 1)}>{age}</button>
    </div>
  );
};

export const Child = React.memo((props) => {
  console.log('Child重新创建');
  const { name, age, sex } = props.user;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{sex}</p>
      <button onClick={() => props.callBack()}>修改手机号</button>
    </div>
  );
});

//子组件传递函数时  不加callback会导致重新渲染
export const UseCallbackDemo2 = () => {
  const [user, setUser] = useState({
    name: '张三',
    age: 18,
    sex: '男',
  });
  const [phone, setPhone] = useState('123456789');
  // useCallback缓存函数 解决 传递方法后 子组件重新渲染
  const callBack = useCallback(() => {
    console.log('callBack');
  }, []);
  console.log('UseDemo2重新创建');

  return (
    <div>
      <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>修改姓名{user.age}</button>
      <Child user={user} callBack={callBack} />
    </div>
  );
};

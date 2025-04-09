import { useState } from 'react';
//  一般字符串 布尔值 数字
export const UseState1 = () => {
  const [isShow, setIsShow] = useState(false);

  const [userName, setUserName] = useState('张三');

  const handleClick = () => {
    setIsShow(!isShow);
  };
  const changeName = () => {
    setUserName('李四');
  };

  return (
    <>
      <div className='state-title'> useState Demo</div>
      <div className='my-useState'>
        <p>UseState1</p>
        <p>{isShow ? '真' : '假'}</p>
        <button onClick={handleClick}>修改isShow</button>
      </div>
      <div className='my-useState'>
        <p>UseState1</p>
        <p>{userName}</p>
        <button onClick={changeName}>修改用户名</button>
      </div>
    </>
  );
};

//处理 数组 对象

export const UseStateArray = () => {
  // 不可以直接操作原数组  视图不生效
  const [list, setList] = useState([1, 2, 3, 4]);
  const changeList = () => {
    //添加元素
    // setList([...list, 5]);
    // setList([6, ...list]);
    // 删除元素
    // setList(list.filter((item) => item !== 2));
    // setList(list.slice(1, 3));
    // 替换数组某一个元素
    // setList(list.map((item) => (item === 2 ? 55 : item)));
    // 替换指定位置的元素
    const newList = [...list];
    newList[1] = 55;
    setList(newList);
  };

  // 处理对象
  const [user, setUser] = useState({ name: '张三', age: 18 });

  const changeUser = () => {
    // 方式一 解构
    // setUser({ ...user, age: 19 });
    // 方式二 Object.assign
    setUser(Object.assign({}, user, { age: 20 }));
  };
  // useState可以传函数  但必须有返回值  只执行一次
  const [user2, setUser2] = useState(() => {
    const dateTime = new Date().getDate();
    return { name: '李四', age: 18, dateTime };
  });
  const changeUser2 = () => {
    // 方式一 解构
    // setUser2({ ...user, age: 19 });
    // 方式二 Object.assign
    setUser2(Object.assign({}, user2, { age: 20 }));
  };

  //  useState是异步的
  const [count, setCount] = useState(0);
  const changeCount = () => {
    // setCount(count + 1); // 异步执行
    // console.log(count); //同步执行 0
    // 多次调用setCount 只会执行一次 解决方案 使用回调函数
    setCount(count + 1); //1
    setCount(count + 1); //1
    setCount((prevCount) => prevCount + 1); //2
    setCount((prevCount) => prevCount + 1); //3
  };
  return (
    <>
      <div className='state-title'> useState Demo</div>
      <div className='my-useState-array'>
        <p className='result'>list:{list.join(',')}</p>
        <button onClick={changeList}>修改数组</button>
      </div>
      <div className='my-useState-array'>
        <p className='result'>user:{JSON.stringify(user)}</p>
        <button onClick={changeUser}>修改对象</button>
      </div>
      <div className='my-useState-array'>
        <p className='result'>user:{JSON.stringify(user2)}</p>
        <button onClick={changeUser2}>修改对象</button>
      </div>
      <div className='my-useState-array'>
        <p className='result'>useStatus是异步的:{count}</p>
        <button onClick={changeCount}>修改值</button>
      </div>
    </>
  );
};

import './index.css';

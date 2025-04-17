//  什么是纯函数
// 1、输入决定输出：相同的输入永远会得到相同的输出。  (行为可预测)
// 2、没有副作用：函数的执行不会影响到外部  (不依赖外部状态)
// 例如 const sum=(a,b)=>a+b;

// 什么是副作用函数
// 1、 执行时会影响到外部的状态，或者依赖于外部的状态。
// 2、 可预测性降低 有副作用
// 3、高度耦合
// 例如  操作引用类型  操作本地存储  调用外部API (fetch、ajax) 操作DOM 计时器

// let globalNum = 0;
// function setNewNum(num) {
//   globalNum += num; //修改函数外部变量
//   localStorage.setItem('num', globalNum); //修改localStorage
//   fetch('https://www.baidu.com'); //请求外部API
//   document.getElementById('root').innerHTML = globalNum; //操作DOM
// }

export const UseEffectDemo = () => {
  // 副作用函数
  let obj = { name: '小明' };
  const changeObj = (objs) => {
    objs.name = '小红';
    return objs;
  };
  console.log('副作用函数-init', obj);
  const newObj = changeObj(obj); // 传入了引用类型 并修改了值
  console.log(obj, '副作用函数-after', newObj);

  // 纯函数
  let obj1 = { name: '小明' };
  const changeObj1 = (objs) => {
    // 深拷贝方式
    //  1、JSON.parse(JSON.stringify(objs)) //undefind 会丢失
    //  2、lodash cloneDeep
    //  3、window.structuredClone(objs) 浏览器自带深拷贝函数
    //  4、手写deep函数
    const newObj = window.structuredClone(objs); //深拷贝
    newObj.name = '小红';
    return newObj;
  };
  console.log('纯函数-init', obj1);
  let newObj1 = changeObj1(obj1);
  console.log(obj1, '纯函数-after', newObj1);

  return <div>useEffectDemo 副作用函数和纯函数对比</div>;
};

import { useEffect, useState } from 'react';

const Child = (props) => {
  // 卸载函数执行时间： 1、组件卸载时  2、监听的值更新时
  // 使用场景搜索接口请求
  useEffect(() => {
    console.log('Child-useEffect-init');
    let timmer = setTimeout(() => {
      console.log('模拟发起请求， 搜索词', props.name);
    }, 1000);
    return () => {
      console.log('Child-useEffect-destroy');
      clearTimeout(timmer);
    };
  }, [props.name]);
  return <div>Child{props.name}</div>;
};
export const UseEffectDemo1 = () => {
  // useEffect 无返回值 第一个参数回调函数  第二个参数 依赖项数组 选填
  // 场景： 获取dom  操作dom 网络请求
  // 执行时机： 组件渲染完成后执行  数据更新后执行
  // 相当于DidMount + DidUpdate
  // 第二个参数 空数组  只走一次(组件渲染完成后执行)
  // 空数组场景  1、初始化数据 2、获取详情数据 3、组件卸载时执行
  // useEffect(()=>{},[]?)
  const doms = document.getElementById('useEffectDemo1');
  console.log('out', doms);

  useEffect(() => {
    console.log('useEffectDemo1 副作用函数 []只加载一次');
    const doms = document.getElementById('useEffectDemo1');
    doms.style.color = 'yellow';
    console.log('in', doms);
  }, []);

  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('小明');
  useEffect(() => {
    console.log('useEffectDemo1 组件渲染完成后执行  数据更新后执行');
  }, [count]);

  const [show, setShow] = useState(true);
  console.log('isShowChild', show);

  return (
    <div id='useEffectDemo1'>
      UseEffectDemo1 纯函数
      <p>count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        数字加1
      </button>
      <p>user:{userName}</p>
      <br />
      搜索：{' '}
      <input
        type='text'
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      isShowChild：{show.toString()}
      <br />
      <button onClick={() => setShow(!show)}>显示/隐藏</button>
      {show && <Child name={userName} />}
    </div>
  );
};

// 用户信息获取案例，通过id获取用户信息，并且当id发生改变时，会获取新的用户信息
export const UserInforDemo1 = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('user', userId);
    console.log('userData', userData);
    if (userId === '') {
      setLoading(false);
      setUserData({});

      return;
    }
    setLoading(true);
    setUserData({});
    const fetchUserData = async () => {
      try {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
            setLoading(false);
          });
        // .catch((error) => {
        //   setError(error);
        //   setLoading(false);
        // });
      } catch (error) {
        console.log('error', error);
      }
    };
    let timmer = setTimeout(() => {
      fetchUserData();
    }, 1000);
    return () => {
      clearTimeout(timmer);
    };
  }, [userId]);
  return (
    <div className='user-infor-demo1-effect'>
      <div className='search'>
        <span>用户ID：</span>
        <input
          placeholder='请输入用户Id'
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          min={1}
          max={10}
        />
      </div>
      {error && <p>错误: {error}</p>}
      {loading && <div className='loading'>加载中...</div>}
      {Object.keys(userData).length > 0 && (
        <div className='user-data'>
          <h2>用户信息:</h2>
          <p>用户Id: {userData.id}</p>
          <p>姓名: {userData.name}</p>
          <p>邮箱: {userData.email}</p>
          <p>用户名: {userData.username}</p>
          <p>电话: {userData.phone}</p>
          <p>网站: {userData.website}</p>
        </div>
      )}
    </div>
  );
};

import './index.css';

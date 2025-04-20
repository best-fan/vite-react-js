import { useState, useDebugValue } from 'react';
import './index.css';

const useCookie = (name, initValue = '') => {
  //1、获取cookie
  const getCookie = () => {
    // const cookie = document.cookie;
    // const arr = cookie.split('; ');
    // for (let i = 0; i < arr.length; i++) {
    //   const item = arr[i];
    //   const [key, value] = item.split('=');
    //   if (key === name) {
    //     return value;
    //   }
    // }
    // return initValue;

    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
    return match ? match[2] : initValue;
  };
  const [cookie, setCookie] = useState(getCookie());
  // 2、设置cookie
  const setCookieValue = (value) => {
    document.cookie = `${name}=${value}`;
    setCookie(value);
  };
  // 3、删除cookie

  const removeCookie = () => {
    document.cookie = `${name}=;expires=${new Date(0)}`;
    setCookie('');
  };
  // 调试自定义Hooks
  useDebugValue(cookie, (val) => {
    return '格式化-' + val;
  });
  return [cookie, setCookieValue, removeCookie];
};
export const UseDebugValueDemo = () => {
  const [title, setTitle, delTitle] = useCookie('title', '网站一');
  return (
    <>
      <div>UseDebugValueDemo:{title}</div>
      <button onClick={() => setTitle('网站二')}>更新</button>
      <button onClick={() => delTitle()}>删除</button>
    </>
  );
};

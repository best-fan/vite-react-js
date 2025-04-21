import { useState } from 'react';
import './index.css';

//  组件 react 没有全局组件 和 局部组件
// 在那儿引在哪用
export const UserCard = () => {
  const openMessage = () => {
    console.log(1111);

    window.onShowMessage();
  };
  return (
    <>
      <div className='user-card'>
        <div className='card-header'>
          <img src='https://picsum.photos/200/200' alt='avatar' />
        </div>
        <div className='card-body'>
          <div className='card-title'>张三</div>
          <div className='card-text'>我室友说今天不出去了</div>
        </div>
      </div>
      <button onClick={openMessage}> 打开Message</button>
    </>
  );
};

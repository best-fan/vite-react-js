// 异步组件  Suspense

import React, { useRef, Suspense, lazy, use } from 'react';

// 使用场景  loading动画  骨架屏  代码分包按需加载 懒加载 瀑布流

// const AsyncComponent = React.lazy(() => import('./AsyncComponent'));
// 未使用 异步组件加载
import AsyncComponent from './asyncDemo';
// 使用  异步组件加载  打包时组件会单独打包
const AsyncComponent1 = lazy(() => import('./asyncDemo'));
// 异步组件加载 对比
// 引用 CreatePortalDemo 组件
import { CreatePortalDemo } from '../createPortal/index';

export const AsyncDemo = () => {
  const modelRef = useRef(null);

  const openModal = () => {
    console.log(modelRef);

    if (modelRef.current && modelRef.current.openModal) {
      modelRef.current.openModal();
    }
  };

  return (
    <div>
      {/* // 未使用 异步组件加载 */}
      <AsyncComponent />

      {/* 使用异步组件  加载时 显示 fallback */}
      <Suspense fallback={<div>loading...</div>}>
        <AsyncComponent1 />
        <button onClick={openModal}>打开Modal</button>
        <CreatePortalDemo title={'我是Modal'} content={'我是Modal内容'} ref={modelRef} />
      </Suspense>
      <AsyncDemo2 />
    </div>
  );
};

// import { Skeleton } from '../skeleton/index';
import { Skeleton } from 'antd';
export const AsyncDemo2 = () => {
  return (
    <>
      <Suspense fallback={<Skeleton active />}>
        <Card />
      </Suspense>
    </>
  );
};

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
const getData = async () => {
  await sleep(2000);
  return await fetch('./data.json').then((res) => res.json());
};
const dataPromise = getData();
const Card = () => {
  const { data } = use(dataPromise);
  return (
    <div className='demo-card'>
      <header className='card-header'>
        <div className='card-name'>{data.name}</div>
        <div className='card-age'>{data.age}</div>
      </header>
      <section className='card-content'>
        <div className='card-address'>{data.address}</div>
        <div className='card-avatar'>
          <img width={50} height={50} src={data.avatar} alt='' />
        </div>
      </section>
    </div>
  );
};

import './index.css';

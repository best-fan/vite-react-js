import { useState, useEffect, useLayoutEffect } from 'react';
import './index.css';
// useLayoutEffect 跟 useEffect  使用方式一样

//                  useLayoutEffect          跟     useEffect 的区别
// 执行时机	浏览器完成布局和绘制之前执行副作用	浏览器完成布局和绘制之后执行副作用
// 执行方式             同步执行	                        异步执行
// DOM渲染	          阻塞DOM渲染	                      不阻塞DOM渲染

// 测试DOM阻塞
export const UseLayoutEffectDemo = () => {
  const [count, setCount] = useState(0);
  //不阻塞DOM  页面中先出现app  后出现数组
  useEffect(() => {
    for (let i = 0; i < 5000; i++) {
      //console.log(i);
      setCount((count) => count + 1);
    }
  }, []);
  //阻塞DOM  app和 数组一起出现
  // useLayoutEffect(() => {
  //   for (let i = 0; i < 5000; i++) {
  //     //console.log(i);
  //     setCount((count) => count + 1);
  //   }
  // }, []);
  return (
    <div>
      <div>app </div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{index}</div>
      ))}
    </div>
  );
};
// 动画示例

export const UseLayoutEffectDemo1 = () => {
  // 使用 useEffect 实现动画效果  有效果  useEffec 不会阻塞DOM渲染t
  useEffect(() => {
    const app1 = document.getElementById('use-layout-effect-app1');
    app1.style.transition = 'opacity 3s';
    app1.style.opacity = '1';
  }, []);

  // 使用 useLayoutEffect 实现动画效果  无效果  useLayoutEffect 会阻塞DOM渲染
  useLayoutEffect(() => {
    const app2 = document.getElementById('use-layout-effect-app2');
    app2.style.transition = 'opacity 3s';
    app2.style.opacity = '1';
  }, []);

  return (
    <div>
      <div id='use-layout-effect-app1' style={{ opacity: 0 }}>
        app1
      </div>
      <div id='use-layout-effect-app2' style={{ opacity: 0 }}>
        app2
      </div>
    </div>
  );
};

// useLayoutEffect 应用场景
// 1、需要同步读取或更改DOM：例如，你需要读取元素的大小或位置并在渲染前进行调整。
// 2、防止闪烁：在某些情况下，异步的useEffect可能会导致可见的布局跳动或闪烁。
// 例如，动画的启动或某些可见的快速DOM更改。
// 3、模拟生命周期方法：如果你正在将旧的类组件迁移到功能组件，并需要模拟 componentDidMount、componentDidUpdate和componentWillUnmount的同步行为。

// 场景：记录页面中滚动条位置 在页面切换 或者刷新后回到当前位置
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

export const UseShowScrollPosition = () => {
  //同步执行 绘制之前执行   阻塞DOM渲染  不会出现闪烁
  useLayoutEffect(() => {
    const scrollPosition = getQueryParam('scroll');
    if (scrollPosition) {
      const listScrollEffect = document.getElementById('list-scroll-effect');
      listScrollEffect.scrollTop = scrollPosition;
    }
  }, []);
  const scrollHandler = (e) => {
    console.log(e.target.scrollTop);
    const scrollTop = parseInt(e.target.scrollTop).toFixed(0);
    history.replaceState(null, '', `?scroll=${scrollTop}`);
  };

  return (
    <div className='use-list-scroll-effect'>
      <ul onScroll={scrollHandler} id='list-scroll-effect' style={{ height: '200px', overflowY: 'scroll' }}>
        {Array.from({ length: 500 }).map((_, index) => (
          <li key={index}>Item:{index + 1}</li>
        ))}
      </ul>
    </div>
  );
};

import './index.css';
import { useRef, useState } from 'react';

// useRef   vue中和react中的区别
// vue中 ref是响应式的 属性修改后会更新视图  取值 .value
// react中 ref是静态的 属性修改不会更新视图  取值 .current

//1、 获取dom 并修改属性
export const UseRefDemo = () => {
  const divRef = useRef(null);
  // null | undefined
  // 1、 null  表示空对象 2、解引用 a=null (垃圾回收)
  // 2、undefined 表示未定义
  const handelClick = () => {
    console.log(divRef.current);
    console.dir(divRef.current);
    divRef.current.style.background = 'red';
  };
  return (
    <div>
      <h1>refDemo1</h1>
      <div ref={divRef}>这是内容</div>
      <button onClick={handelClick}>获取domy元素</button>
    </div>
  );
};

// 1、userRef 第一次赋值  后续触发渲染会保存
export const UseRefDemo2 = () => {
  const [count, setCount] = useState(0);
  // let num1 = 0;
  console.log('触发num1被重置 ');
  // 使用ref解决 保存上一次的值  取值赋值都使用 .current
  let num1 = useRef(0);
  const AddConut = () => {
    setCount(count + 1);
    num1.current = count;
  };

  return (
    <div>
      <h1>refDemo2</h1>
      {/* <div>
        {count}:{num1}
      </div> */}
      <div>
        {count}:{num1.current}
      </div>
      <button onClick={AddConut}>累加</button>
    </div>
  );
};

//使用场景 计时器
export const UseRefTimmer = () => {
  const [count, setCount] = useState(0);
  let timmer = useRef(null);
  const start = () => {
    timmer.current = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log('触发了');
    }, 800);
  };
  const stop = () => {
    clearInterval(timmer.current);
  };

  return (
    <div>
      <h1>refDemo3</h1>
      <div>{count}</div>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
    </div>
  );
};

//注意事项
// 1、 useRef 的值在第一次渲染时赋值  在组件重新渲染时不会再次初始化
// 2、 改变 ref.current 属性时 react不会重新渲染  因为ref是个普通对象
// 3、 useRef 的值不能作为useEffect的依赖项 因为它不是一个响应式
// 4、 useRef 不能直接获取子组件的实例 需要使用 forwardRef

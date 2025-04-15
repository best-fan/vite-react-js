import './index.css';

import { useStorage } from '../../hooks/useStorage';

// 案例一：使用 useSyncExternalStore 订阅外部数据源的变化
export const UseSyncExternalStoreDemo = () => {
  // useSyncExternalStore 是一个新的hook，用于在函数组件中订阅外部数据源的变化
  // subscribe: 订阅函数，返回一个取消订阅的函数
  // getSnapshot: 获取快照函数，返回当前的快照值
  // getServerSnapshot: 服务器端渲染时获取快照的函数，可选参数
  // const res = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
  const [count, setCount] = useStorage('count', 0);
  return (
    <div className='my-useSyncExternalStore'>
      <p>value:{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
};

import { useHistory } from '../../hooks/useHistory';
export const UseSyncExternalStoreDemo2 = () => {
  const [url, push, replace] = useHistory();
  return (
    <div className='my-useSyncExternalStore'>
      <p>url:{url}</p>
      <button onClick={() => push('/test2222')}>push跳转</button>
      <button onClick={() => replace('/test111')}>replace跳转</button>
    </div>
  );
};

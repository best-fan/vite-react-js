import { useSyncExternalStore } from 'react';
export const useStorage = (key, initValue) => {
  // 订阅者
  const subscribe = (callBack) => {
    console.log('订阅者执行了 :>> ', callBack);

    window.addEventListener('storage', callBack);
    return () => {
      // 取消订阅
      window.removeEventListener('storage', callBack);
    };
  };
  // 获取快照
  const getSnapshot = () => {
    console.log('快照执行了 :>> ');
    const value = localStorage.getItem(key) || initValue;
    return value ? JSON.parse(value) : initValue;
  };
  const res = useSyncExternalStore(subscribe, getSnapshot);

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log('方法调用了 :>> ');
    // 触发storage事件 否则视图不更新
    window.dispatchEvent(new StorageEvent('storage'));
  };
  return [res, updateStorage];
};

// //使用案例
// const [count, setCount] = useStorage('count', 0);
// setCount(count + 1);

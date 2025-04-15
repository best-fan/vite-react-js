import { useSyncExternalStore } from 'react';

export const useHistory = () => {
  //订阅者
  const subscribe = (callBack) => {
    // 订阅浏览器中的API 监听history变化
    //两种模式 hash history
    // history 底层 popstate
    // hash 底层 hashchange
    window.addEventListener('popstate', callBack);
    window.addEventListener('hashchange', callBack);

    //取消订阅
    return () => {
      window.removeEventListener('popstate', callBack);
      window.removeEventListener('hashchange', callBack);
    };
    //popstate事件 只能监听浏览器中的前进 后退按钮
    // 无法监听js 中的 pushState 和 replaceState
  };

  // 获取快照
  const getSnapshot = () => {
    // 获取当前的url
    return window.location.href;

    //返回引用类型时 需要特殊处理
    // https://message163.github.io/react-docs/hooks/useSyncExternalStore.html
  };

  const url = useSyncExternalStore(subscribe, getSnapshot);

  const push = (url) => {
    window.history.pushState(null, null, url);
    // 手动触发popstate事件
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  const replace = (url) => {
    window.history.replaceState(null, null, url);
    // 手动触发popstate事件
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return [url, push, replace];
  //ts  将数组转换成 元组 类型
  // return [url, push, replace] as const;
};

// 使用示例
// const [url, push, replace]= useHistyory();

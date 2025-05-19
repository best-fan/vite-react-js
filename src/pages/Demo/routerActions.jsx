export const RouterActionDemo = () => {
  return (
    <>
      <div>routerActionDemo</div>
    </>
  );
};

import { useLoaderData } from 'react-router';
// 使用 useLoaderData 获取路由加载的数据
export const RouterLoaderDemo = () => {
  const { data, dataId } = useLoaderData();
  return (
    <>
      <h1 >routerLoaderDemo</h1>
      <div>id:{dataId}</div>
      {[data].map((item) => {
        return (
          <>
            <div>name:{item.name}</div>
            <div>email:{item.email}</div>
            <div>body:{item.body}</div>
            <div>postId:{item.postId}</div>
          </>
        );
      })}
    </>
  );
};

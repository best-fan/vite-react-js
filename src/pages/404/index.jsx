import { Link } from 'react-router';
export const NotFoundView = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
      }}>
      <h1 style={{ fontSize: 96, color: '#1890ff', margin: 0 }}>404</h1>
      <p style={{ fontSize: 24, color: '#888', margin: '16px 0 0 0' }}>抱歉，您访问的页面不存在</p>
      <Link
        to='/'
        style={{
          marginTop: 32,
          color: '#1890ff',
          fontSize: 18,
          textDecoration: 'underline',
        }}>
        返回首页
      </Link>
    </div>
  );
};

import { useRouteError } from 'react-router';
export const ErrorBoundaryDemoView = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>code:{error.status}</p>
      <p>message：{error.message}</p>
    </div>
  );
};

export const LoaderErrorDemoView = () => {
  return (
    <div>
      <div>LoaderErrorDemoView</div>
      <Link />
    </div>
  );
};

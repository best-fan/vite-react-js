import { Outlet, useNavigation } from 'react-router';
import { Alert, Spin } from 'antd';
export const ContentView = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === 'loading';
  return (
    <div className='my-custom-content'>
      {isLoading ? (
        <Spin size='large' tip='loading...'>
          <Alert description='等待等待等待' message='加载中' type='info' />
        </Spin>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

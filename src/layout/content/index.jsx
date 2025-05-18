import { Outlet } from 'react-router';
export const ContentView = () => {
  return (
    <div className='my-custom-content'>
      <Outlet />
    </div>
  );
};

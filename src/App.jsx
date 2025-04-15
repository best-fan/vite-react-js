import { MyButton } from './components/test1/demo1';
import { Main } from './components/main/main';
import MyUser from './components/test2/demo2';
import { Demo3 } from './components/test3/demo3';
import { MainPanel, MainPanel2, UserList, ClickButton, UpdateView, MyShareBtn } from './components/test4';
import 'reset.css';
import './App.css';
import { useState } from 'react';

import { UseState1, UseStateArray } from './components/useState/index';

import { UseReducerDemo1, UseReducerDemo2 } from './components/useReducer/index';

import { UseSyncExternalStoreDemo, UseSyncExternalStoreDemo2 } from './components/useSyncExternalStore/index';
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  // handleClick();

  return (
    <>
      <Main />
      {/* <MyButton />
      <MyUser />
      <Demo3 /> */}
      {/* <MainPanel />
      <MainPanel2 />
      <UserList />
      <ClickButton />
      <UpdateView /> */}
      {/* <div>组件共享数据</div>
      <MyShareBtn count={count} onClick={handleClick} />
      <MyShareBtn count={count} onClick={handleClick} /> */}
      {/* <UseState1 />
      <UseStateArray /> */}
      {/* <UseReducerDemo1 /> */}
      {/* <UseReducerDemo2 /> */}
      <UseSyncExternalStoreDemo />
      <UseSyncExternalStoreDemo2 />
    </>
  );
}

export default App;

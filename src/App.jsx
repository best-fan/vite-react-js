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

// import { UseSyncExternalStoreDemo, UseSyncExternalStoreDemo2 } from './components/useSyncExternalStore/index';
import { UseTransitionDemo } from './components/useTransition/index';

import { UseDeferredValueDemo } from './components/useDeferredValue/index';

import { UseEffectDemo, UseEffectDemo1, UserInforDemo1 } from './components/useEffect/index';

import { UseLayoutEffectDemo, UseLayoutEffectDemo1, UseShowScrollPosition } from './components/useLayoutEffect/index';

import { UseRefDemo, UseRefDemo2, UseRefTimmer } from './components/useRef/index';
import {
  UseImperativeHandleDemo,
  UseImperativeHandleDemo2,
  UseImperativeHandleForm,
} from './components/useImperativeHandle/index';

import { UseContextDemo } from './components/useContext/index';
import { UseReactMemoDemo, UserMemoDemo } from './components/useMemo/index';
import { UseCallbackDemo, UseCallbackDemo2 } from './components/useCallback/index';
import { UseDebugValueDemo } from './components/useDebugValue/index';
import { UseUseIdDemo } from './components/useId/index';

import { UserCard } from './components/Card/index';

import { CardList } from './components/Props/index';
import { ControlledDemo } from './components/Controlled/index';

import { AsyncDemo } from './components/AsyncCom/index';

import { CssModuleDemo } from './components/cssModule';

import { CssInJsDemo } from './components/cssModule/cssInJs';

import { TailwindDemo } from './components/Tailwind/index';

import router from './router/index';
import { RouterProvider } from 'react-router';
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  // handleClick();

  return (
    <>
      {/* <Main /> */}
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
      {/* <UseSyncExternalStoreDemo />
      <UseSyncExternalStoreDemo2 /> */}
      {/* <UseTransitionDemo /> */}
      {/* <UseDeferredValueDemo /> */}
      {/* <UseEffectDemo />
      <UseEffectDemo1 /> */}
      {/* <UserInforDemo1 /> */}
      {/* <UseLayoutEffectDemo /> */}
      {/* <UseLayoutEffectDemo1 /> */}
      {/* <UseShowScrollPosition /> */}
      {/* <UseRefDemo />
      <UseRefDemo2 /> */}
      {/* <UseRefTimmer /> */}
      {/* <UseImperativeHandleDemo /> */}
      {/* <UseImperativeHandleDemo2 /> */}
      {/* <UseImperativeHandleForm /> */}
      {/* <UseContextDemo /> */}
      {/* <UseReactMemoDemo /> */}
      {/* <UserMemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      {/* <UseCallbackDemo2 /> */}
      {/* <UseDebugValueDemo /> */}
      {/* <UseUseIdDemo /> */}
      {/* <UserCard /> */}
      {/* <CardList /> */}
      {/* <ControlledDemo /> */}
      {/* <AsyncDemo /> */}
      {/* <CssModuleDemo /> */}
      {/* <CssInJsDemo /> */}
      {/* <TailwindDemo /> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;

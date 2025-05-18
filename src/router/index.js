import { createBrowserRouter } from 'react-router';
import HomeView from '../pages/Index/index';
import AboutView from '../pages/About/index';
import BaseView from '../pages/Base/index';
import { UseState1, UseStateArray } from '../components/useState/index';
import { UseReducerDemo1, UseReducerDemo2 } from '../components/useReducer/index';
import { UseTransitionDemo } from '../components/useTransition/index';
import { UseDeferredValueDemo } from '../components/useDeferredValue/index';
import { UseEffectDemo, UseEffectDemo1, UserInforDemo1 } from '../components/useEffect/index';
import { UseLayoutEffectDemo, UseLayoutEffectDemo1, UseShowScrollPosition } from '../components/useLayoutEffect/index';
import { UseRefDemo, UseRefDemo2, UseRefTimmer } from '../components/useRef/index';
import {
  UseImperativeHandleDemo,
  UseImperativeHandleDemo2,
  UseImperativeHandleForm,
} from '../components/useImperativeHandle/index';
import { UseContextDemo } from '../components/useContext/index';
import { UseReactMemoDemo, UserMemoDemo } from '../components/useMemo/index';
import { UseCallbackDemo, UseCallbackDemo2 } from '../components/useCallback/index';
import { UseDebugValueDemo } from '../components/useDebugValue/index';
import { UseUseIdDemo } from '../components/useId/index';
import { UserCard } from '../components/Card/index';
import { CardList } from '../components/Props/index';
import { ControlledDemo } from '../components/Controlled/index';
import { AsyncDemo } from '../components/AsyncCom/index';
import { CssModuleDemo } from '../components/cssModule';
import { CssInJsDemo } from '../components/cssModule/cssInJs';
import { TailwindDemo } from '../components/Tailwind/index';

import { LayoutView } from '../layout/index';

import { DetialView } from '../pages/Detial/index';

import {
  RouterJumpDemo,
  RouterJumpDetialDemo,
  RouterJumpDetialDemo2,
  RouterJumpDetialDemo3,
} from './pages/RouterJump/index';
const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeView,
  },
  {
    path: '/about',
    Component: AboutView,
  },
  {
    path: '/base',
    Component: BaseView,
  },
  {
    path: '/use-state',
    Component: UseState1,
  },
  {
    path: '/use-state-array',
    Component: UseStateArray,
  },
  {
    path: '/use-reducer-1',
    Component: UseReducerDemo1,
  },
  {
    path: '/use-reducer-2',
    Component: UseReducerDemo2,
  },
  {
    path: '/use-transition',
    Component: UseTransitionDemo,
  },
  {
    path: '/use-deferred-value',
    Component: UseDeferredValueDemo,
  },
  {
    path: '/use-effect',
    Component: UseEffectDemo,
  },
  {
    path: '/use-effect-1',
    Component: UseEffectDemo1,
  },
  {
    path: '/user-info',
    Component: UserInforDemo1,
  },
  {
    path: '/use-layout-effect',
    Component: UseLayoutEffectDemo,
  },
  {
    path: '/use-layout-effect-1',
    Component: UseLayoutEffectDemo1,
  },
  {
    path: '/use-show-scroll',
    Component: UseShowScrollPosition,
  },
  {
    path: '/use-ref',
    Component: UseRefDemo,
  },
  {
    path: '/use-ref-2',
    Component: UseRefDemo2,
  },
  {
    path: '/use-ref-timer',
    Component: UseRefTimmer,
  },
  {
    path: '/use-imperative-handle',
    Component: UseImperativeHandleDemo,
  },
  {
    path: '/use-imperative-handle-2',
    Component: UseImperativeHandleDemo2,
  },
  {
    path: '/use-imperative-handle-form',
    Component: UseImperativeHandleForm,
  },
  {
    path: '/use-context',
    Component: UseContextDemo,
  },
  {
    path: '/use-react-memo',
    Component: UseReactMemoDemo,
  },
  {
    path: '/use-memo',
    Component: UserMemoDemo,
  },
  {
    path: '/use-callback',
    Component: UseCallbackDemo,
  },
  {
    path: '/use-callback-2',
    Component: UseCallbackDemo2,
  },
  {
    path: '/use-debug-value',
    Component: UseDebugValueDemo,
  },
  {
    path: '/use-id',
    Component: UseUseIdDemo,
  },
  {
    path: '/user-card',
    Component: UserCard,
  },
  {
    path: '/card-list',
    Component: CardList,
  },
  {
    path: '/controlled',
    Component: ControlledDemo,
  },
  {
    path: '/async',
    Component: AsyncDemo,
  },
  {
    path: '/css-module',
    Component: CssModuleDemo,
  },
  {
    path: '/css-in-js',
    Component: CssInJsDemo,
  },
  {
    path: '/tailwind',
    Component: TailwindDemo,
  },
  // 嵌套路由
  {
    path: '/layout',
    Component: LayoutView,
    children: [
      {
        index: true, //嵌套路由 中 设置为默认路由
        Component: HomeView,
      },
      {
        path: 'home',
        Component: HomeView,
      },
      {
        path: 'about',
        Component: AboutView,
      },
      {
        path: 'detial/:id',
        Component: DetialView,
      },
    ],
  },
  //布局路由  父元素的 path  省略 二级变成一级
  {
    Component: LayoutView,
    children: [
      {
        path: 'useState1',
        Component: UseState1,
      },
      {
        path: 'useStateArray',
        Component: UseStateArray,
      },
      {
        path: 'routerJump',
        Component: RouterJumpDemo,
      },
      {
        path: 'routerJumpDetial',
        Component: RouterJumpDetialDemo,
      },
      {
        path: 'routerJumpDetial2/:id/:name/:age',
        Component: RouterJumpDetialDemo2,
      },
      {
        path: 'routerJumpDetial3',
        Component: RouterJumpDetialDemo3,
      },
    ],
  },
]);

export default router;

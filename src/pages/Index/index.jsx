import { NavLink } from 'react-router';
import { Button, Flex } from 'antd';
export default function IndexPage() {
  const routes = [
    { path: '/', name: '首页' },
    { path: '/about', name: '关于' },
    { path: '/base', name: '基础组件' },
    { path: '/use-state', name: 'useState示例' },
    { path: '/use-state-array', name: 'useState数组示例' },
    { path: '/use-reducer-1', name: 'useReducer示例1' },
    { path: '/use-reducer-2', name: 'useReducer示例2' },
    { path: '/use-transition', name: 'useTransition示例' },
    { path: '/use-deferred-value', name: 'useDeferredValue示例' },
    { path: '/use-effect', name: 'useEffect示例' },
    { path: '/use-effect-1', name: 'useEffect示例1' },
    { path: '/user-info', name: '用户信息示例' },
    { path: '/use-layout-effect', name: 'useLayoutEffect示例' },
    { path: '/use-layout-effect-1', name: 'useLayoutEffect示例1' },
    { path: '/use-show-scroll', name: '滚动位置示例' },
    { path: '/use-ref', name: 'useRef示例' },
    { path: '/use-ref-2', name: 'useRef示例2' },
    { path: '/use-ref-timer', name: 'useRef定时器示例' },
    { path: '/use-imperative-handle', name: 'useImperativeHandle示例' },
    { path: '/use-imperative-handle-2', name: 'useImperativeHandle示例2' },
    { path: '/use-imperative-handle-form', name: 'useImperativeHandle表单示例' },
    { path: '/use-context', name: 'useContext示例' },
    { path: '/use-react-memo', name: 'useReactMemo示例' },
    { path: '/use-memo', name: 'useMemo示例' },
    { path: '/use-callback', name: 'useCallback示例' },
    { path: '/use-callback-2', name: 'useCallback示例2' },
    { path: '/use-debug-value', name: 'useDebugValue示例' },
    { path: '/use-id', name: 'useId示例' },
    { path: '/user-card', name: '用户卡片示例' },
    { path: '/card-list', name: '卡片列表示例' },
    { path: '/controlled', name: '受控组件示例' },
    { path: '/async', name: '异步组件示例' },
    { path: '/css-module', name: 'CSS Module示例' },
    { path: '/css-in-js', name: 'CSS-in-JS示例' },
    { path: '/tailwind', name: 'Tailwind示例' },
    { path: '/layout', name: 'Layout示例' },
  ];
  return (
    <div className='index-page'>
      <h1>Index Page</h1>
      <p>Welcome to the Index page!</p>
      <Flex gap='small' wrap>
        {routes.map(({ path, name }) => (
          <Button key={path} color='default' variant='filled' href={path}>
            {name}
          </Button>
        ))}
      </Flex>
    </div>
  );
}

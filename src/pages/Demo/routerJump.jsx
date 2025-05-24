import { Card } from 'antd';

import { NavLink, replace } from 'react-router';

// https://message163.github.io/react-docs/router/params.html
export const RouterJumpDemo = () => {
  return (
    <>
      <Card>
        <h1>路由跳转传参接收参数Demo</h1>
        <NavLink to='/routerJumpDetial?id=123&name=张三'>方式一Params</NavLink>
        <br />
        <NavLink to='/routerJumpDetial2/123/张三/18'>方式二动态路由</NavLink>

        <br />
        <NavLink to='/routerJumpDetial3' state={{ id: 123, name: '张三', age: 18 }}>
          方式三state
        </NavLink>
      </Card>
    </>
  );
};

import { useSearchParams } from 'react-router';

//方式一 params
export const RouterJumpDetialDemo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');

  return (
    <>
      <Card>
        <h1>RouterJumpDetialDemo</h1>
        <br />
        <span>id:{id}</span>
        <br />
        <span>name:{name}</span>
        <br />
        <button onClick={() => setSearchParams({ id: 1, name: 'zhangsan' })}>修改url参数</button>
      </Card>
    </>
  );
};

import { useParams } from 'react-router';
// 方式二动态路由
export const RouterJumpDetialDemo2 = () => {
  const params = useParams();
  return (
    <>
      <Card>
        <h1>RouterJumpDetialDemo2</h1>
        <br />
        <span>id:{params.id}</span> <br />
        <span>name:{params.name}</span>
        <br />
        <span>age:{params.age}</span>
      </Card>
    </>
  );
};

//方式三state
import { useLocation } from 'react-router';
export const RouterJumpDetialDemo3 = () => {
  // 参数只存在当前会话
  const location = useLocation();
  const { id, name, age } = location.state;
  return (
    <>
      <Card>
        <h1>RouterJumpDetialDemo2</h1>
        <br />
        <span>id:{id}</span> <br />
        <span>name:{name}</span>
        <br />
        <span>age:{age}</span>
      </Card>
    </>
  );
};
// 导航 https://message163.github.io/react-docs/router/apis/link.html

import { Link, useNavigate } from 'react-router';
export const RouterJumpDetialDemo4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <h1>RouterJumpDetialDemo4</h1>
        <br />
        <p> Link 和 NavLink 不会导致页面的刷新 </p>
        <p> replace 替换当前路由</p>
        <p> to 跳转路由不会替换</p>
        <p>传参 state 接收 useLocation</p>
        <p>relative:path 相对路径 router 绝对路径</p>
        <p>reloadDocument 是否重新加载页面</p>
        <p>preventScrollReset：是否阻止滚动位置重置 viewTransition：是否启用视图过渡</p>
        <Link>Link 跳转</Link>
        Navlink 会经过以下三个状态的转换，而Link不会，所以Navlink就是一个link的增强版。
        active：激活状态(当前路由和to属性匹配) pending：等待状态(loader有数据需要加载)
        transitioning：过渡状态(通过viewTransition属性触发)
        <NavLink to='/routerJumpDetial'>NavLink跳转</NavLink>
        <p>编程式导航</p>
        <button onClick={() => navigate('/routerJumpDetial', { replace: true, state: { id: 1, name: 'zhangsan' } })}>
          编程式导航
        </button>
        <button onClick={() => replace('/routerDemo')}>替换当前路由</button>
      </Card>
    </>
  );
};

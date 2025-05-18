import { Card } from 'antd';

import { NavLink } from 'react-router';

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

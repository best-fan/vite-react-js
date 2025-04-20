import React, { useRef, useState, useImperativeHandle } from 'react';
import './index.css';

// useImperativeHandle;  父元素 获取子组件  react 18 和 19不一样

// useImperativeHandle(ref, () => {
// },[deps])

// ref 父组件传递的 ref对象
// createHandle:返回值 一个对象  对象的属性就是子组件暴露给父组件的 方法和属性
// deps？:可选
// 不传参数：组件挂载时执行、状态更新后执行   []: 组件挂载时执行    [count]:组件挂载时执行、count更新后执行

// props; 子组件向父组件传值
// 18版本需要定义 React.forwardRef
const Child = React.forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      name: 'Child',
      count,
      getCount: () => {
        return count;
      },
      addCount: () => {
        setCount(count + 1);
      },
      subCount: () => {
        setCount(count - 1);
      },
    };
  });
  return (
    <div className='my-useImperativeHandle' ref={ref}>
      <h3> 我是子组件</h3>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
});

// 19版本 props, ref 通过解构获取
const Child2 = ({ ref }) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      name: 'Child',
      count,
      getCount: () => {
        return count;
      },
      addCount: () => {
        setCount(count + 1);
      },
      subCount: () => {
        setCount(count - 1);
      },
    };
  });
  return (
    <div className='my-useImperativeHandle' ref={ref}>
      <h3> 我是子组件</h3>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export const UseImperativeHandleDemo = () => {
  // 18版本 useRef 不是必传
  // 19版本 useRef 是必传
  const childRef = useRef(null);
  const childRef2 = useRef(null);

  const getChild = () => {
    console.log(childRef.current);
    console.log(childRef.current.getCount());
    //操作子组件+1
    childRef.current.addCount();
    // childRef.current.subCount();
  };
  const getChild2 = () => {
    console.log(childRef2.current);
    console.log(childRef2.current.getCount());
    //操作子组件+1
    childRef2.current.addCount();
    // childRef.current.subCount();
  };
  return (
    <div>
      <h3>父组件</h3>
      <hr />
      <Child ref={childRef}></Child>
      <Child2 ref={childRef2}></Child2>
      <button onClick={getChild}>获取子组件1</button>
      <button onClick={getChild2}>获取子组件2</button>
    </div>
  );
};

const Items1 = ({ ref }) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => {
    console.log('useImperativeHandleItems1 组件挂载时执行、任意状态更新后执行');

    return {
      name: 'Child',
      count,
      getCount: () => {
        return count;
      },
      addCount: () => {
        setCount(count + 1);
      },
      subCount: () => {
        setCount(count - 1);
      },
    };
  });
  return (
    <div className='my-useImperativeHandle' ref={ref}>
      <h3> 我是子组件1</h3>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};
const Items2 = ({ ref }) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(
    ref,
    () => {
      console.log('useImperativeHandleItems2 组件挂载时执行');

      return {
        name: 'Child',
        count,
        getCount: () => {
          return count;
        },
        addCount: () => {
          setCount(count + 1);
        },
        subCount: () => {
          setCount(count - 1);
        },
      };
    },
    []
  );
  return (
    <div className='my-useImperativeHandle' ref={ref}>
      <h3> 我是子组件2</h3>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};
const Items3 = ({ ref }) => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  useImperativeHandle(
    ref,
    () => {
      console.log('useImperativeHandleItems3 组件挂载时执行、count更新后执行');

      return {
        name: 'Child',
        count,
        getCount: () => {
          return count;
        },
        addCount: () => {
          setCount(count + 1);
        },
        subCount: () => {
          setCount(count - 1);
        },
      };
    },
    [count]
  );
  return (
    <div className='my-useImperativeHandle' ref={ref}>
      <h3> 我是子组件3</h3>
      <div>flag:{flag ? 'true' : 'false'}</div>
      <button onClick={() => setFlag(!flag)}>flag</button>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <button onClick={() => setCount(count - 1)}>count-1</button>
    </div>
  );
};

// 执行时机Demo
export const UseImperativeHandleDemo2 = () => {
  return (
    <div>
      <h3>父组件</h3>
      <hr />
      <Items1 ref={useRef(null)} />
      <Items2 ref={useRef(null)} />
      <Items3 ref={useRef(null)} />
    </div>
  );
};

//实际案例

const ChildFrom = ({ ref }) => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
    email: '',
  });

  const validate = () => {
    if (form.userName === '' || form.password === '' || form.email === '') {
      console.log('不能为空');

      return false;
    }
    console.log('校验通过');
    return true;
  };
  const reset = () => {
    setForm({
      userName: '',
      password: '',
      email: '',
    });
  };
  useImperativeHandle(ref, () => {
    return {
      name: '表单子组件',
      getForm: () => {
        return form;
      },
      validate,
      reset,
    };
  });
  return (
    <div>
      <form action=''>
        <input
          type='text'
          name='userName'
          placeholder='请输入用户名'
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
        />
        <input
          type='password'
          name='password'
          placeholder='请输入密码'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type='email'
          name='email'
          placeholder='请输入邮箱'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </form>
    </div>
  );
};
// 实际案例 from
export const UseImperativeHandleForm = () => {
  const childRef = useRef(null);
  return (
    <div>
      <button onClick={() => console.log(childRef.current.getForm())}>获取表单数据</button>
      <button onClick={() => childRef.current.validate()}>校验表单</button>
      <button onClick={() => childRef.current.reset()}>重置表单</button>
      <ChildFrom ref={childRef} />
    </div>
  );
};

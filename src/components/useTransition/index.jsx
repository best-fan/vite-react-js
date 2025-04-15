import './index.css';

import { useTransition } from 'react';
import { Input, List } from 'antd';
import { useState } from 'react';

// 使用率较低;
// useTransition 帮助我们不阻塞UI渲染 的情况下更新数据

// 案例一：使用 useTransition 优化输入框搜索 列表渲染
export const UseTransitionDemo = () => {
  const [inputVal, setInputVal] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition({ timeoutMs: 1000 });
  const handelChange = (e) => {
    const { value } = e.target;
    setInputVal(value);
    console.log('inputVal', value);
    if (value.length == 0) {
      setList([]);
      return;
    }
    fetch(`/api/list?keyWord=${value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.list);
        //方式一 普通赋值  造成UI阻塞
        setList(data.list);
        //方式二 使用useTransition赋值
        startTransition(() => {
          setList(data.list);
        });
      });
  };
  return (
    <div className='my-useTransition'>
      <Input value={inputVal} onChange={handelChange}></Input>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <List
          dataSource={list}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.name} description={item.address} />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

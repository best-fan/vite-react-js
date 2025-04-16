import './index.css';
// https://message163.github.io/react-docs/hooks/useDeferredValue.html
//useTransition 关注状态的过渡 列表过渡 tab切换过渡
//useDeferredValue 关注的是输入框的过渡  输入框的延迟更新
import './index.css';

import { useDeferredValue, useState } from 'react';
import { Input, List } from 'antd';

import mockjs from 'mockjs';
// 案例一：使用 useDeferredValue 优化输入框搜索
export const UseDeferredValueDemo = () => {
  const [inputVal, setInputVal] = useState('');
  const [list] = useState(() => {
    return mockjs.mock({
      'list|10000': [
        {
          'id|+1': 1,
          name: '@natural', // 数字
          address: '@county(true)',
        },
      ],
    }).list;
  });
  const deferredQuery = useDeferredValue(inputVal); // 延迟更新的值
  const findList = () => {
    console.log(deferredQuery, '---', inputVal);

    if (!deferredQuery) {
      return list;
    }
    return list.filter((item) => item.name.toString().includes(deferredQuery));
  };
  const isStale = deferredQuery !== inputVal;
  return (
    <div className='my-useTransition'>
      <Input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></Input>
      <List
        style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.3s ease-in-out' }}
        dataSource={findList()}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
      />
    </div>
  );
};

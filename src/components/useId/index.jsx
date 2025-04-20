import { useState, useId } from 'react';
import './index.css';

// useId // 用于生成一个唯一的id
// 场景1、  服务端渲染的时候 使用 math.random() 生成id 可能会导致服务端 和 客户端的id 不一致   需使用 useId
// 场景2、  无障碍交互

// 场景3、 点击label 聚焦input
export const UseUseIdDemo = () => {
  const id = useId();
  console.log(id);
  const userId = useId();

  const [title, setTitle] = useState('useState');
  return (
    <div>
      {/* 点击姓名 聚焦input */}
      <label htmlFor={id}>姓名</label>
      <input id={id} type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      {/* 无障碍交互使用 */}
      <br />
      <input type='text' aria-labelledby={userId} placeholder='用户名' />
      <p id={userId}>这是一个用户名输入框</p>
    </div>
  );
};

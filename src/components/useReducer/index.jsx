import './index.css';

import { useReducer, useState } from 'react';
export const UseReducerDemo1 = () => {
  // useReducer 适合复杂的状态管理
  //1、 useReducer( reducer, initialState, init?)
  //2、 initialState: 初始状态  init: 初始化函数（选填）
  //2、 init存在 则使用 init函数的返回值作为初始状态
  //2、 reducer函数：接收两个参数 state 和 action，返回新的状态

  // 初始值
  const initStatus = -1;
  // 初始化函数
  const initFun = (initStatus) => {
    console.log('initFun只执行一次');

    return Math.abs(initStatus);
  };

  // reducer函数
  const handelCount = (state, action) => {
    console.log('reducer函数执行');
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error();
    }
  };
  const [count, dispatch] = useReducer(handelCount, initStatus, initFun);
  const [num, setNum] = useState(0);
  return (
    <>
      <div className='state-title'>useReducer Demo1</div>

      <div className='my-useReducer'>
        <p>useState：{num}</p>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div>
      <div className='my-useReducer'>
        <p>useReducer：{count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    </>
  );
};

export const UseReducerDemo2 = () => {
  const initGoods = [
    { id: 1, name: '商品1', num: 5, price: 100, isEdit: false },
    { id: 2, name: '商品2', num: 2, price: 200, isEdit: false },
    { id: 3, name: '商品3', num: 6, price: 300, isEdit: false },
  ];
  const handelGoods = (state, action) => {
    console.log('action', state, action);
    const item = state.find((item) => item.id === action.id);
    switch (action.type) {
      case 'add':
        item.num++;
        return [...state];
      case 'sub':
        item.num--;
        return [...state];

      case 'edit':
        item.isEdit = true;
        return [...state];
      case 'edit_finish':
        item.isEdit = false;
        return [...state];
      case 'update_name':
        item.name = action.newName;
        return [...state];
      case 'delete':
        return state.filter((item) => item.id !== action.id);
    }
    return state;
  };
  const [goodsList, dispatch1] = useReducer(handelGoods, initGoods);

  return (
    <>
      <div className='state-title'>useReducer Demo2</div>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>商品</th>
            <th>数量</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map((item) => (
            <tr key={item.id}>
              <td>
                {item.isEdit ? (
                  <input
                    onBlur={() => dispatch1({ type: 'edit_finish', id: item.id })}
                    onChange={(e) => dispatch1({ type: 'update_name', id: item.id, newName: e.target.value })}
                    type='text'
                    value={item.name}></input>
                ) : (
                  item.name
                )}
              </td>
              <td>
                <button onClick={() => dispatch1({ type: 'add', id: item.id })}>+</button>
                {item.num}
                <button onClick={() => dispatch1({ type: 'sub', id: item.id })}>-</button>
              </td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => dispatch1({ type: 'edit', id: item.id })}>修改</button>
                <button onClick={() => dispatch1({ type: 'delete', id: item.id })}>删除</button>
              </td>
            </tr>
          ))}
          <tr>
            <td align='left' colSpan={4}>
              合计{goodsList.reduce((a, b) => a + b.num * b.price, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

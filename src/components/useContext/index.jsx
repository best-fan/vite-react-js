import React, { useState, useContext } from 'react';
import './index.css';

// useContext; 用于跨组件传props  实现 祖孙级别组件通讯

// 1、创建全局上下文
const ThemeContext = React.createContext({});

const Child = () => {
  const theme = useContext(ThemeContext);
  console.log(theme, 'Child');

  const setTheme = () => {
    theme.setTheme(theme.theme == 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <div>child</div> <button onClick={() => setTheme()}>修改theme</button>
    </>
  );
};
const Parent = () => {
  const theme = useContext(ThemeContext);
  console.log(theme, 'parent');

  return (
    <div>
      这是父组件
      <Child />
    </div>
  );
};

// React 18语法 ThemeContext.Provider
// React 19语法 ThemeContext

export const UseContextDemo = () => {
  const [theme, setTheme] = useState('light');
  const setMyTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };
  return (
    <div>
      根组件
      <button onClick={() => setMyTheme()}>修改theme</button>
      {/* React 18语法 */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Parent />
        {theme}
      </ThemeContext.Provider>
      {/* React 19语法 */}
      <ThemeContext value={{ theme, setTheme }}>
        <Parent />
        {theme}
      </ThemeContext>
    </div>
  );
};

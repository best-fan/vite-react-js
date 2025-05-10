// css-in-js 一种思想 通过js 动态生成 css
// 优点 ： 独立作用域 动态生成样式 解决了css的命名冲突问题  可用于主题切换
// 缺点 ：基于运行时 损耗性能 调试困难
// 谁在用 antD https://ant-design.antgroup.com/index-cn  自研 css in js
// styled-components 使用较为广泛

// 原理：标签模板 es6新增 https://message163.github.io/react-docs/css/css-in-js.html

import styled, { createGlobalStyle, keyframes } from 'styled-components';

// 用法 styled.html元素  创建组件

// 自定义button  并传参
const CustomButton = styled.button`
  background: ${(props) => (props.primary ? '#BF4F74' : '#ededed')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 16px;
  display: block;
  margin: 5px 0;
`;

// 继承自定义button  继承来实现更多的按钮样式
const MyButton = styled(CustomButton)`
  color: red;
  background: blue;
`;

// 自定义input 并传参 赋值给属性
const CustomInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || '请输入内容',
  defaultValue: props.defaultValue || '123456',
  disabled: props.disabled || false,
}))`
  background: ${(props) => (props.primary ? '#BF4F74' : '#ededed')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 16px;
  display: block;
  margin: 5px 0;
`;

// 全局样式  通过createGlobalStyle 创建全局样式 一般单独引用
const GlobalStyle = createGlobalStyle`
  .cssInJsDemo {
    background: #ededed;
  }
`;

// 位移动画
const move = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(260px);
  }
  100% {
    transform: translateX(0);
  }

`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  animation: ${move} 2s linear infinite;
`;

export const CssInJsDemo = () => {
  return (
    <div className='cssInJsDemo'>
      <GlobalStyle />
      <CustomButton> 这是自定义主题 </CustomButton>
      <CustomButton primary> 这是自定义主题 </CustomButton>
      <MyButton>这是mybutton主题</MyButton>
      <CustomInput type='password' placeholder='请输入密码' />
      <CustomInput type='text' placeholder='自定义placeholeder' defaultValue='123' />
      <Box />
    </div>
  );
};

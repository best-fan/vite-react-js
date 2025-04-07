import './index.css'

export function MyButton() {
  return (
    <div  className="custom-btn" >
      <>
      <p>React 组件必须以大写字母开头</p>
      <button>I'm a button</button>
      <br />
      <p>JSX 必须闭合标签 组件也不能返回多个 JSX 标签 比如 <code><div>...</div></code> 或使用空的<code><>...</></code>  裹</p>
      </>
    </div>
  );
}

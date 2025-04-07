import './index.css';
export const Demo3 = () => {
  //jsx tsx  插值语句 {}  字符串 数字 普通数组
  // 元素 三元表达式 api调用  对象需要转换json字符串

  // 事件 使用驼峰   传参使用监听函数(高阶函数)
  // 函数泛型支持<T,>  不加，把<T>理解成了<div>
  const status = true;
  function add() {
    console.log('add');
  }
  function sum(num) {
    console.log('sum', num);
  }

  function show(name) {
    console.log('name', name);
  }

  const testId = 'testId',
    testClass = 'testClass',
    testStyle = { color: 'green' };
  const htmlStr = '<div>传入html片段123</div>';
  const newList = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
  ];
  return (
    <>
      <div>
        {/* 插值语法 */}
        <h1>{'hello react'}</h1>
        <h2>{2}</h2>
        <h3>[1,2,3]</h3>
        <h4>
          <span>h4</span>
        </h4>
        <h5>{status ? 'yes' : 'no'}</h5>
        {/* 一般事件 */}
        <h5 onClick={add}>{(5.68).toFixed(1)}</h5>
        {/* 传参事件 */}
        <h5 onClick={() => sum(3)}>点击函数传参</h5>
        {/* 泛型事件 */}
        <span onClick={() => show('name')}>函数泛型测试</span>
        <span onClick={() => show(555)}>函数泛型测试</span>
        <br />
        {/* 绑定id class 等属性 */}
        <span style={testStyle} id={testId} className={`${testClass} aa bb cc`}>
          绑定id:{testId} class:{testClass}
        </span>
        {/* 绑定html片段 */}
        <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>

        {/* 循环渲染 遍历数组 */}
        <div className='list'>
          {newList.map((item) => {
            return (
              <div key={item.id}>
                {item.id}-{item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

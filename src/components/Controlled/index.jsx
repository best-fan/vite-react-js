// 受控组件 和 非受控组件
import React, { useState, useRef } from 'react';

// 受控组件 大部分表单相关的
export const ControlledDemo = () => {
  const [name, setName] = useState('');

  const handelChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>受控组件</div>
      <input type='text' value={name} onChange={handelChange} />;<div>{name}</div>
      <UnControlledDemo />
      <FileDemo />
    </>
  );
};

// 非受控组件
export const UnControlledDemo = () => {
  const value = '非受控组件的值';
  const inputRef = useRef(null);
  const getNewValue = () => {
    console.log(inputRef.current.value);
  };
  return (
    <>
      <div>非受控组件</div>
      <input type='text' ref={inputRef} defaultValue={value} />
      <button onClick={getNewValue}>点我获取输入框的值</button>
    </>
  );
};

// 特殊的非受控组件 input file

export const FileDemo = () => {
  const inputRef = useRef(null);
  const getFile = () => {
    console.log(inputRef.current.files[0]);
  };
  return (
    <>
      <div>文件上传</div>
      <input type='file' onChange={getFile} ref={inputRef} />
    </>
  );
};

import React, { useImperativeHandle, useState } from 'react';
import './index.css';

import { createPortal } from 'react-dom';
export const CreatePortalDemo = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    console.log(props);

    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const enter = () => {
    console.log('enter');
    closeModal();
  };
  useImperativeHandle(ref, () => {
    return {
      name: 'AppModal',
      openModal,
      closeModal,
    };
  });
  return createPortal(
    show && (
      <div ref={ref} className='createportal-modal'>
        <div className='modal-header'>
          <div className='modal-title'>{props.title ? props.title : '标题'}</div>
        </div>
        <div className='modal-content'>
          <h1>{props.content ? props.content : 'Modal'}</h1>
        </div>
        <div className='modal-footer'>
          <button className='modal-close-button' onClick={closeModal}>
            关闭
          </button>
          <button className='modal-confirm-button' onClick={enter}>
            确定
          </button>
        </div>
      </div>
    ),
    document.body
  );
});

import React from 'react';
import { Breadcrumb } from 'antd';
export const HeaderView = () => {
  const itemList = [
    {
      title: 'Home',
    },
    {
      title: <a href=''>Application Center</a>,
    },
    {
      title: <a href=''>Application List</a>,
    },
    {
      title: 'An Application',
    },
  ];
  return <Breadcrumb items={itemList} />;
};

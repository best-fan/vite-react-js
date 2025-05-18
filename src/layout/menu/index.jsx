import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';

export const MenuView = () => {
  const items = [
    {
      key: 'sub1',
      label: '布局路由',
      icon: <MailOutlined />,
      children: [
        {
          key: 'g1',
          label: '路由1',
          type: 'group',
          children: [
            { key: '/useStateArray', label: 'useStateArray' },
            { key: '/useState1', label: 'useState' },
          ],
        },
        {
          key: 'g2',
          label: 'Item 2',
          type: 'group',
          children: [
            { key: '3', label: 'Option 3' },
            { key: '4', label: 'Option 4' },
          ],
        },
      ],
    },
    {
      key: '/layout',
      label: '嵌套路由',
      icon: <AppstoreOutlined />,
      children: [
        { key: '/layout/home', label: 'layout-home' },
        { key: '/layout/about', label: 'layout-about' },
        { key: '/', label: 'base' },

        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '7', label: 'Option 7' },
            { key: '8', label: 'Option 8' },
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        { key: '11', label: 'Option 11' },
        { key: '12', label: 'Option 12' },
      ],
    },
    {
      key: 'grp',
      label: '动态路由',
      type: 'group',
      children: [
        { key: '/layout/detial/123', label: '动态路由一 ' },
        { key: '/layout/detial/12353434', label: '动态路由二' },
      ],
    },
  ];
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 195, overflowX: 'hidden' }}
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['/layout']}
        mode='inline'
        items={items}
      />
    </>
  );
};

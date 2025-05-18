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
            { key: '/useStateArray', label: '布局路由-useStateArray' },
            { key: '/useState1', label: '布局路由-useState' },
          ],
        },
      ],
    },
    {
      type: 'divider',
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
          label: '二级',
          children: [
            { key: '7', label: '三级' },
            { key: '8', label: '三级' },
          ],
        },
      ],
    },
    {
      type: 'divider',
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
    {
      type: 'divider',
    },

    {
      key: 'demo1',
      label: 'Demo页面',
      icon: <MailOutlined />,
      children: [
        {
          key: 'demo1-1',
          label: '路由1',
          type: 'group',
          children: [{ key: '/routerJump', label: '路由跳转演示' }],
        },
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

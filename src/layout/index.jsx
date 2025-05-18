import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Sider } = Layout;
import { ContentView } from './content/index';
import { HeaderView } from './header/index';
import { MenuView } from './menu/index';
export const LayoutView = () => {
  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };
  return (
    <>
      <Layout className='my-custom-layout' hasSider>
        <Sider style={siderStyle}>
          <div className='demo-logo-vertical' />
          <MenuView />
        </Sider>
        <Layout>
          <HeaderView />
          <ContentView />
        </Layout>
      </Layout>
    </>
  );
};

import './index.css';

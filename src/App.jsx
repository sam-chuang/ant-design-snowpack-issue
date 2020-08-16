import React from 'react';
import "antd/dist/antd.css"
import { Layout, Menu, Breadcrumb } from "antd"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
  return (
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
        >
          <SubMenu key="test" title="Menu Test">
            <Menu.Item key="1">
              Menu Item Test
          </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Header>
        <Breadcrumb>
          <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content>
        Content Test
      </Content>
    </Layout>
  );
}

export default App;

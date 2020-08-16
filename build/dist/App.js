import React from '../web_modules/react.js';
import "../web_modules/antd/dist/antd.css.proxy.js";
import { Layout, Menu, Breadcrumb } from "../web_modules/antd.js";
const {
  SubMenu
} = Menu;
const {
  Header,
  Content,
  Sider
} = Layout;

function App() {
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Sider, {
    width: 200
  }, /*#__PURE__*/React.createElement(Menu, {
    mode: "inline"
  }, /*#__PURE__*/React.createElement(SubMenu, {
    key: "test",
    title: "Menu Test"
  }, /*#__PURE__*/React.createElement(Menu.Item, {
    key: "1"
  }, "Menu Item Test")))), /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(Breadcrumb.Item, null, "Breadcrumb"), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, "Test"), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, "App"))), /*#__PURE__*/React.createElement(Content, null, "Content Test"));
}

export default App;
//# sourceMappingURL=App.js.map

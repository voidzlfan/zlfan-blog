import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Menu, Space, Button } from "antd";

import { menuList } from "../../config";

import "./index.less";

class Header extends Component {

  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }

  handleJump = ({ item, key, keyPath, domEvent }) => {
    console.log("item", item);
    console.log("key", key);
    console.log("keyPath", keyPath);
    console.log("domEvent", domEvent);
  };

  handleLogin = () => {
    this.props.history.push('login');
  };

  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };

  render() {
    const { menuNodes } = this;
    return (
      <div className="header-warpper">
        <Row className="header">
          <Col span={4}>
            <Space className="header-title">
              <span className="header-title-blog">zlfan</span>
              <div className="header-title-description">每天进步一点点</div>
            </Space>
          </Col>
          <Col span={10} offset={7}>
            <Menu
              className="header-menu"
              onClick={this.handleJump}
              mode="horizontal"
            >
              {menuNodes}
            </Menu>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={this.handleLogin}>
              登录 / 注册
            </Button>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default withRouter(Header);

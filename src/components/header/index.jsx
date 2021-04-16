import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Space, Button, Modal } from "antd";

import { menuList } from "../../config";

import "./index.less";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

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
    this.setState({ showModal: true });
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
      // <Row className="header">
      //   <Col xs={24} sm={24} md={8} lg={12} xl={{ offset: 4, span: 4 }}>
      //     <Space className="header-title">
      //       <span className="header-title-blog">zlfan</span>
      //       <span>每天进步一点点</span>
      //     </Space>
      //   </Col>
      //   <Col xs={0} sm={0} md={10} lg={10} xl={{ offset: 5, span: 6 }}>
      //     <Menu
      //       className="header-menu"
      //       onClick={this.handleJump}
      //       mode="horizontal"
      //     >
      //       {menuNodes}
      //     </Menu>
      //   </Col>
      //   <Col xs={0} sm={0} md={6} lg={6} xl={5}>
      //     <Button type="primary" onClick={this.handleLogin}>
      //       登录 / 注册
      //     </Button>
      //   </Col>
      //   <Modal
      //     title="登录"
      //     visible={this.state.showModal}
      //     //onOk={}
      //     onCancel={() => this.setState({ showModal: false })}
      //     okText="登录"
      //     cancelText="取消"
      //   ></Modal>
      // </Row>
      <div className="header-warpper">
      <Row className="header">
        <Col span={4}>
          <Space className="header-title">
            <span className="header-title-blog">zlfan</span>
            <span>每天进步一点点</span>
          </Space>
        </Col>
        <Col span={10} offset={10}>
          <Menu
            className="header-menu"
            onClick={this.handleJump}
            mode="horizontal"
          >
            {menuNodes}
          </Menu>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Header;

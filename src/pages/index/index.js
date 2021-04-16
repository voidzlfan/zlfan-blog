import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Header from "../../components/header";
import Home from "../home";
import Article from "../article";
import Live from "../live";
import LeaveWord from "../leave-word";
import About from "../about";
import NotFound from "../not-found";
import Author from "../../components/slider/author"
import Footer from "../../components/footer";

import "./index.less";

const { Sider, Content } = Layout;

//导航路由
class Index extends Component {


  render() {
    return (
      <Layout className="layout">
        <Header />
        <Layout className="layout-layout">
          <Content className="layout-layout-context">
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/article" component={Article} />
              <Route path="/live" component={Live} />
              <Route path="/leaveword" component={LeaveWord} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Sider className="layout-layout-silder">
            <Author/>
          </Sider>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default Index;

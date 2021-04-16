import React, { Component } from "react";
import { Avatar, Divider, Space, Tag, Tooltip, Card } from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./author.less";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="avatar-wrapper">
        <Avatar
          className="avatar"
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src="https://avatars.githubusercontent.com/u/38897523?s=400&u=81f99297b76d2ba6b5815e168c82a038861f35ef&v=4"
          alt="zlfan"
        />
        <Divider />

        <div className="avatar-tag">
          <Tag color="success">react16</Tag>
          <Tag color="success">hook</Tag>
          <Tag color="processing">antd4</Tag>
          <Tag color="warning">antd pro4</Tag>
          <Tag color="error">es6</Tag>
          <Tag color="warning">react native</Tag>
        </div>

        <Card className="avatar-intr" bordered={false}>
          学无止尽 逆水行舟
        </Card>

        <Divider>联系我</Divider>

        <Space className="avatar-link" wrap={true}>
          <Tooltip title="https://github.com/voidzlfan">
            <a
              href="https://github.com/voidzlfan"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <GithubOutlined
                  style={{ fontSize: 24, color: "rgba(0,0,0,.6)" }}
                />
              </span>
            </a>
          </Tooltip>
          <Tooltip title="zl17875305743">
            <span>
              <WechatOutlined
                style={{ fontSize: 24, color: "rgba(0,0,0,.6)" }}
              />
            </span>
          </Tooltip>
          <Tooltip title="977933816@qq.com">
            <span>
              <MailOutlined style={{ fontSize: 24, color: "rgba(0,0,0,.6)" }} />
            </span>
          </Tooltip>
        </Space>

        <Divider>作品</Divider>

        <div>
          <div>xxxxxxxx</div>
          <div>xxxxxxxx</div>
          <div>xxxxxxxx</div>
        </div>
      </div>
    );
  }
}

export default Author;

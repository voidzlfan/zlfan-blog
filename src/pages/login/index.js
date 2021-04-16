import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";

//登录
const Login = (props) => {

  const { history } = props;

  const onFinish = (values) => {
    console.log("Success:", values);
    history.push('home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      title={"你好"}
      
      style={{
        height: 400,
        width: 400,
        //border: "1px solid",
        margin: "0 auto",
        marginTop: "10%",
      }}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default withRouter(Login);

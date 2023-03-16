import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const onFinish = (values: any) => {
  //localhost:3000/users
  axios
    .get(`localhost:3000/users/phone=${values.phone}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Signin = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "50px auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="PhoneNumber"
          name="phone"
          rules={[{ required: true, message: "Không để trống số điện thoại!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Không để trống mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
          <Link to={"/register"}>Đăng ký</Link>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signin;

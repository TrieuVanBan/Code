import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {

    const onFinish = (values: any) => {

        console.log("Success:", values);

        //check
        axios.get('http://localhost:3000/users')
      .then((res) => {
        const validUser = res.data.find((item: any) => item.phone === values.phone && item.password === values.password)
        // console.log('is valid user = ', validUser ? 'true' : 'false')
      })
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
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
          rules={[{ required: true, message: "Số điện thoại không để trống !" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Mật khẩu không để trống !" }, {min: 8, message:"Mật khẩu ít nhất 8 kí tự !"}]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
          <Link to={"/login"}>Đăng ký</Link>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

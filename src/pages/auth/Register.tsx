import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { userType } from '../../type/user';

const Register = () => {

  const navigate = useNavigate()
  const onFinish = (values: userType) => {
    // console.log('Success:', values);
    if(values.password === values.repass){
      axios.post('http://localhost:3000/users', values)
      .then(res => {
        alert("Bạn đã đăng ký thành công!")
        navigate('/signin')
      }).catch(err => console.log(err))
    }else{
      console.log("Mật khẩu không trùng khớp !");
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: "${label} không được để trống!",
    types: {
      number: "${label} phải là số!",
    },
  };

  return (
    <>
    <h2 style={{textAlign:'center'}}>Đăng ký</h2>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, margin: '50px auto' }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    validateMessages={validateMessages}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true}]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="PhoneNumber"
      name="phone"
      rules={[{ required: true, type: "number"}]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true}]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Repass"
      name="repass"
      rules={[{ required: true}]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
      <Link to={"/signin"}>Đăng nhập</Link>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Đăng ký
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default Register
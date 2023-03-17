import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { userType } from "../../type/user";

const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values: userType) => {
    console.log(values);

    const { username, password, phone } = values;
    const data = {
      username,
      password,
      phone,
    };
    console.log(data);

    axios
      .post("http://localhost:3000/users", data)
      .then((res) => {
        alert("Bạn đã đăng ký thành công!");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "${label} không được để trống!",
    // types: {
    //   number: "${label} phải là số!",
    // },
    // pattern: "${label} không đúng định dạng!"
  };

  return (
    <>
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
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="PhoneNumber"
          name="phone"
          rules={[{ required: true }, { pattern: new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i), message: "Không đúng định dạng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }, {
            min: 8,
            message: 'Mật khẩu ít nhất 8 ký tự!',
          },]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Repass"
          name="repass"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không trùng khớp!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
          <Link to={"/login"}>Đăng nhập</Link>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;

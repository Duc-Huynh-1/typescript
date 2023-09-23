import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${Number(id)}`)
      .then(({ data }) => {
        form.setFieldsValue({
          name: data.name,
          price: data.price,
        });
      });
  }, []);

  const onFinish = (values: any) => {
    axios
      .put(`http://localhost:3000/products/${Number(id)}`, values)
      .then(() => {
        alert("Product edit successfully");
        navigate("/admin/products");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1>Add Product</h1>
      <Form.Item
        label="Name"
        name="name"
        normalize={(value) => value.trim()}
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProduct;

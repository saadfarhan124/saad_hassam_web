import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
  message,
} from "antd";
import emailjs from "emailjs-com";
import Image from "next/image";
const data = [
  {
    id: 1,
    title: "Branding",
    img: "/assets/images/branding.png",
  },
  {
    id: 2,
    title: "UI/UX",
    img: "/assets/images/website.png",
  },
  {
    id: 3,
    title: "Illustration",
    img: "/assets/images/illustration.png",
  },
  {
    id: 4,
    title: "Icongraphy",
    img: "/assets/images/design.png",
  },
  {
    id: 5,
    title: "Sketch",
    img: "/assets/images/drawing.png",
  },
  {
    id: 6,
    title: "Other",
    img: "/assets/images/contract.png",
  },
];
const Contact = () => {
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState([])

  const sendEmail = (e) => {
    setLoading(true);
    const templateParams = {
      name: e.name,
      email: e.email,
      subject: e.budget,
      message: `${e.message} Budget: ${e.budget}`,
    };

    emailjs
      .send(
        "service_rgp72w3",
        "template_083138l",
        templateParams,
        "VYj7rWlWm9vXK1NHp"
      )
      .then(
        (response) => {
          setLoading(false);
          message.success(
            "We appreciate your interest and will get back to you as soon as possible"
          );
        },
        (err) => {
          setLoading(false);
          message.error("FAILED...", err);
        }
      );
  };

  return (
    <div id="contact" style={{ marginBlock: 20, height: "100vh" }}>
      <Row justify="space-around" align="bottom">
        <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
          <Typography.Title level={1} style={{ fontSize: "5rem" }}>
            Let's Work <br /> Together
          </Typography.Title>
        </Col>
        <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
          <Image
            height={400}
            width={400}
            style={{ objectFit: "contain" }}
            src="/assets/images/r6.png"
            alt="No Image Found"
          />
        </Col>
      </Row>
      <Form
        form={form}
        onFinish={sendEmail}
        name="control-ref"
        layout="vertical"
        requiredMark={false}
        autoComplete="off"
      >
        <Row justify="space-around" align="top" style={{ marginBottom: 10 }}>
          <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="start">
              <div style={{ width: "80%" }}>
                <Form.Item
                  name="name"
                  label="NAME"
                  rules={[
                    {
                      required: false,
                      message: "Invalid Name!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="EMAIL"
                  rules={[
                    {
                      type: "email",
                      message: "Invalid Email",
                    },
                    {
                      required: false,
                      message: "Invalid Email!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Email Address" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="MESSAGE"
                  rules={[
                    {
                      required: false,
                      message: "Invalid Message!",
                    },
                  ]}
                >
                  <Input.TextArea size="large" placeholder="Message" />
                </Form.Item>
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  style={{ width: "100%" }}
                >
                  SEND MESSAGE
                </Button>
              </div>
            </Row>
          </Col>

          <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="start">
              <div style={{ width: "80%" }}>
                <Form.Item
                  name="budget"
                  label="Budget"
                  rules={[
                    {
                      required: false,
                      message: "Invalid Budget!",
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Budget"
                  />
                </Form.Item>

                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginTop: 10 }}
                  gutter={[20, 20]}
                >
                  {data.map((item, i) => (
                    <Col
                      xs={10}
                      sm={7}
                      md={7}
                      lg={7}
                      xl={7}
                      xxl={7}
                      key={i}
                      style={{ cursor: "pointer" }}
                    >
                      <Card
                        bodyStyle={{ padding: "10px 10px" }}
                        style={{ border: "1px solid" }}
                      >
                        <Row justify="center" align="middle">
                          <Image
                            height={55}
                            width={55}
                            style={{ objectFit: "contain" }}
                            src={item.img}
                            alt={item.title}
                          />
                        </Row>
                      </Card>
                      <Row justify="center">
                        <Typography.Text strong>{item.title}</Typography.Text>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Contact;

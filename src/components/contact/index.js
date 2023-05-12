import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Grid,
  Input,
  InputNumber,
  Row,
  Typography,
  message,
} from "antd";
import emailjs from "emailjs-com";
import Image from "next/image";
import {
  TiChartBarOutline,
  TiMail,
  TiMessage,
  TiUser,
  TiUserOutline,
} from "react-icons/ti";
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
  const screens = Grid.useBreakpoint();
  const [isLoading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  console.log(screens);
  const handleSelect = (content) => {
    const findIfExist = selected.find((item) => item === content);

    if (findIfExist) {
      const index = selected.indexOf(content);
      const temp = [...selected];

      if (index !== -1) {
        temp.splice(index, 1);
        setSelected(temp);
      }
    } else {
      setSelected([...selected, content]);
    }
  };

  console.log(selected);
  const sendEmail = (e) => {
    setLoading(true);
    const templateParams = {
      name: e.name,
      email: e.email,
      subject: selected.join(),
      message: `${e.message} Budget: ${e.budget}`,
    };

    emailjs
      .send(
        "service_s03de57",
        "template_jfpa4y1",
        templateParams,
        "f5eyikNj1kxRf-AHi"
      )
      .then(
        (response) => {
          setLoading(false);
          form.resetFields();
          setSelected([]);
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
    <div id="contact" style={{ marginBlock: 20, height: "95vh" }}>
      <Row justify={screens.xs ? "center" : "space-around"} align="bottom">
        <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
          <Typography.Title
            level={1}
            style={{
              fontSize: screens.xs ? "4rem" : "5rem",
              textAlign: screens.xs || !screens.md ? "center" : "start",
              marginTop: screens.xs || !screens.md ? "1rem" : "0",
            }}
          >
            Let&apos;s Work <br /> Together
          </Typography.Title>
        </Col>
        <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
          <Row justify="center">
            <Image
              height={screens.xs ? 250 : 380}
              width={screens.xs ? 250 : 380}
              style={{ objectFit: "contain", marginTop: "1rem !important" }}
              src="/assets/images/r6.png"
              alt="No Image Found"
            />
          </Row>
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
        <Row
          justify={screens.xs ? "center" : "space-around"}
          align="top"
          style={{ marginBottom: 10 }}
        >
          <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
            <Row justify={"start"}>
              <div
                style={{ width: screens.xs || !screens.md ? "100%" : "80%" }}
              >
                <Form.Item
                  name="name"
                  label={
                    <Row align="middle">
                      <TiUserOutline size={16} />
                      <Typography.Text strong>NAME </Typography.Text>
                    </Row>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Invalid Name!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={
                    <Row align="middle">
                      <TiMail size={16} />
                      <Typography.Text strong>EMAIL </Typography.Text>
                    </Row>
                  }
                  rules={[
                    {
                      type: "email",
                      message: "Invalid Email",
                    },
                    {
                      required: true,
                      message: "Invalid Email!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Email Address" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={
                    <Row align="middle">
                      <TiMessage size={16} />
                      <Typography.Text strong>MESSAGE </Typography.Text>
                    </Row>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Invalid Message!",
                    },
                  ]}
                >
                  <Input.TextArea size="large" placeholder="Message" />
                </Form.Item>
                <Button
                  size="large"
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  style={{
                    width: "100%",
                    display: screens.xs || !screens.md ? "none" : "",
                  }}
                  className="btn"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </Row>
          </Col>

          <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="center">
              <div
                style={{ width: screens.xs || !screens.md ? "100%" : "80%" }}
              >
                <Form.Item
                  name="budget"
                  label={
                    <Row align="middle">
                      <TiChartBarOutline size={16} />
                      <Typography.Text strong>
                        BUDGET{" "}
                        <Typography.Text italic style={{ color: "lightgray" }}>
                          (Optional)
                        </Typography.Text>
                      </Typography.Text>
                    </Row>
                  }
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
                      onClick={() => handleSelect(item.title)}
                    >
                      <Card
                        bodyStyle={{ padding: "10px 10px" }}
                        style={{
                          border:
                            selected
                              .filter((i) => {
                                return i === item.title;
                              })
                              .toString() === item.title
                              ? "1px solid"
                              : null,
                        }}
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
                        <Typography.Text
                          strong={
                            selected
                              .filter((i) => {
                                return i === item.title;
                              })
                              .toString() === item.title
                              ? true
                              : false
                          }
                        >
                          {item.title}
                        </Typography.Text>
                      </Row>
                    </Col>
                  ))}
                </Row>
                <Button
                  size="large"
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  style={{
                    width: "100%",
                    margin: "1rem 0",
                    display: screens.xs || !screens.md ? "" : "none",
                  }}
                  className="btn"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Contact;

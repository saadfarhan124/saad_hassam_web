import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import emailjs from "emailjs-com";
import styles from "../../styles/Contact.module.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(name, email, subject, message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = (name, email, subject, message) => {
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
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
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div id="contact">
      <Row>
        <Col xs={24} sm={24} lg={12} xl={12} xxl={14}>
          <div className={styles.container1}></div>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={12} xxl={10}>
          <div className={styles.container2}>
            <Typography.Title className={styles.title}>
              Get In Touch
            </Typography.Title>
            <Typography.Text className={styles.para}>
              If you have any questions, comments, or business inquiries, please
              don&apos;t hesitate to get in touch. I would love to hear from
              you.
            </Typography.Text>{" "}
            <br />
            <br />
            <Typography.Text className={styles.para}>
              Whether you&apos;re interested in commissioning a piece of
              artwork, collaborating on a project, or just want to say hello,
              I&apos;m always open to new opportunities and connections.
            </Typography.Text>{" "}
            <br />{" "}
            <Typography.Text className={styles.para}>
              Thank you for taking the time to visit my website, and I look
              forward to hearing from you soon!
            </Typography.Text>
          </div>

          <div className={styles.container3}>
            <div className={styles.innercontain}>
              <div>
                <Row className={styles.row1}>
                  <Col span={11}>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    ></Input>
                  </Col>

                  <Col span={11}>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    ></Input>
                  </Col>
                </Row>
              </div>
              <div className={styles.inputWrapper}>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                ></Input>
              </div>
              <div className={styles.textarea}>
                <Input.TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={3}
                ></Input.TextArea>
              </div>

              <div>
                <Button onClick={handleSubmit} className={styles.btn}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

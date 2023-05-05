import React from "react";
import { Button, Col, Input, Row, Typography } from "antd";
import styles from "../../styles/Contact.module.css";
const Contact = () => {
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
                    <Input placeholder="Input 1"></Input>
                  </Col>

                  <Col span={11}>
                    <Input placeholder="Input 1"></Input>
                  </Col>
                </Row>
              </div>
              <div className={styles.inputWrapper}>
                <Input placeholder="Input 2"></Input>
              </div>
              <div className={styles.textarea}>
                <Input placeholder="Input 3"></Input>
              </div>

              <div>
                <Button className={styles.btn}>Submit</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

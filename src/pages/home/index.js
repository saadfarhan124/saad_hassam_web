import { Col, Row, Typography } from "antd";
import React from "react";
import Layouts from "../../components/layouts";
import styles from "../../styles/Home.module.css";
import Footer from "../footer";
const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Layouts />
        <div className={styles.box}>
          <Row className={styles.containerone}>
            <Col xs={12} md={8}>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "32px", fontWeight: 700 }}>
                    2021 - Present
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Senior Concept Artist</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Innovative Solutions</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={16}>
              <p className={styles.coltwopara}>
                As Senior Concept Artist, I helped a struggling team deliver one
                project per week. As Team Lead, I improved the team&apos;s
                performance, resulting in two high-quality projects per week. It
                was an amazing experience and equipped me with strong leadership
                and project management skills.
              </p>
            </Col>
          </Row>

          <Row className={styles.containerone}>
            <Col xs={12} md={8}>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "32px", fontWeight: 700 }}>
                    2020 - 2021
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Freelance Illustrator</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Upwork</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={16}>
              <p className={styles.coltwopara}>
                During the COVID lockdowns, I turned to freelance work on
                platforms such as Upwork and Fiverr, which allowed me to earn an
                income and expand my professional network. It was an amazing
                experience that helped me overcome financial struggles and
                sharpen my skills.
              </p>
            </Col>
          </Row>

          <Row className={styles.containerone}>
            <Col xs={12} md={8}>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "32px", fontWeight: 700 }}>
                    2019 - 2020
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Concept Artist</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={{ fontSize: "26px" }}>Blackboard Production</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={16}>
              <p className={styles.coltwopara}>
                I created illustrations for an Arabic-themed animated film,
                which was an amazing experience. It allowed me to learn about
                Arabic culture and showcase my artistic skills.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

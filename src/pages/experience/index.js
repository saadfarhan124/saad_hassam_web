import { Col, Row, Typography } from "antd";
import React from "react";
import styles from "../../styles/Experience.module.css";
import Footer from "../footer";
const Experience = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.contain}>
          <Row className={styles.row}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={{ span: 10, push: 3 }}
              xl={{ span: 10, push: 3 }}
              xxl={{ span: 10, push: 4 }}
            >
              <p className={styles.t1}>2021 - Present</p>
              <p className={styles.t2}>Senior Concept Artist</p>
              <p className={styles.t2}>Innovative Solutions</p>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={11}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                As Senior Concept Artist, I helped a struggling team deliver one
                project per week. As Team Lead, I improved the team&apos;s
                performance, resulting in two high-quality projects per week. It
                was an amazing experience and equipped me with strong leadership
                and project management skills.
              </p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={{ span: 10, push: 3 }}
              xl={{ span: 10, push: 3 }}
              xxl={{ span: 10, push: 4 }}
            >
              <p className={styles.t1}>2020 - 2021</p>

              <p className={styles.t2}>Freelance Illustrato</p>
              <p className={styles.t2}>Upwork</p>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={11}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                During the COVID lockdowns, I turned to freelance work on
                platforms such as Upwork and Fiverr, which allowed me to earn an
                income and expand my professional network. It was an amazing
                experience that helped me overcome financial struggles and
                sharpen my skills.
              </p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={{ span: 10, push: 3 }}
              xl={{ span: 10, push: 3 }}
              xxl={{ span: 10, push: 4 }}
            >
              <p className={styles.t1}>2019 - 2020</p>

              <p className={styles.t2}>Concept Artist</p>
              <p className={styles.t2}>Blackboard Production</p>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={11}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                I created illustrations for an Arabic-themed animated film,
                which was an amazing experience. It allowed me to learn about
                Arabic culture and showcase my artistic skills.
              </p>
            </Col>
          </Row>
        </div>
        <Footer />;
      </div>
    </>
  );
};

export default Experience;

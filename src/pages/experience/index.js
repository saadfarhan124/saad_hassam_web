import { Col, Row, Typography } from "antd";
import React from "react";
import Footer from "../footer";
import styles from "../../styles/Experience.module.css";
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
              xl={{ span: 11, pull: 1 }}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                At Innovative Solutions, I started as a senior concept artist,
                but my initiatives and leadership skills led to my promotion as
                a team lead. In this role, I played a key part in optimizing
                team performance and resource utilization. Prior to my arrival,
                the team took more than a week to deliver one book. However,
                with my leadership, we were able to improve productivity and
                began delivering two books per team in the same timeframe.
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

              <p className={styles.t2}>Creative Lead</p>
              <p className={styles.t2}>Code Clan</p>
            </Col>

            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={{ span: 11, pull: 1 }}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                As a UI/UX designer and creative consultant at Code Clan, my
                primary focus was to enhance the user experience and interface
                design for various US and UK based companies. This involved
                revamping or creating their digital presence, including
                websites, mobile applications, and web-based platforms, to
                ensure they were user-friendly, visually appealing, and easy to
                navigate.
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
              xl={{ span: 11, pull: 1 }}
              xxl={{ span: 12, pull: 2 }}
            >
              <p className={styles.coltwopara}>
                During my tenure at Blackboard, I started as an illustrator and
                played a key role in transforming scripts into storyboards for
                3D animated shorts. With my diverse skill set and experience, I
                was able to quickly advance through the ranks. As I progressed,
                I took on the responsibility of optimizing and redesigning the
                workflow pipeline, resulting in a significant reduction in
                production time.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Experience;

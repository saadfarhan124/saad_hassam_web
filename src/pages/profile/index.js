import React from "react";
import Layouts from "../layouts";
import styles from "../../styles/Profile.module.css";
import { Col, Row, Typography } from "antd";

const Profile = () => {
  return (
    <Layouts>
      <div className={styles.container}>
        <Row justify="space-between" className={styles.container1}>
          <Col span={2}>
            <img
              src="/assets/images/insta.png"
              className={styles.img}
              alt="No Image Found"
            />
            <br />
            <img
              src="/assets/images/linkd.png"
              className={styles.img}
              alt="No Image Found"
            />
            <br />
            <img
              src="/assets/images/youtube.png"
              className={styles.img}
              alt="No Image Found"
            />
          </Col>
          <Col span={3}>
            <img
              height={150}
              width={150}
              src="/assets/images/profile.png"
              className={styles.img}
              alt="No Image Found"
            />
          </Col>
          <Col span={19}>
            <h1 className={styles.title1}>Saad Hassam</h1>

            <h1 className={styles.title2}>Designer/Concept Artist</h1>

            <p className={styles.para}>
              I began my journey in the world of art, creating realistic
              paintings and drawings. But as time went on, my artistic vision
              began to evolve. I found myself exploring the abstract,
              experimenting with simple shapes, and pushing the boundaries of
              what was possible. Through my career, I never stopped creating
              art, always striving to create something new and unique.
            </p>
            <p className={styles.para} style={{ marginTop: "3rem" }}>
              My creative journey eventually led me to the world of concept art,
              where I designed characters for local films. I also discovered a
              love for theatre, taking a six-month training session in acting
              that culminated in performances on some of the biggest stages
              around
            </p>
          </Col>
        </Row>
      </div>
    </Layouts>
  );
};

export default Profile;

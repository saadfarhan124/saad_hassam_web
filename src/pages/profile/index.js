import React from "react";
import Layouts from "../../components/layouts";
import styles from "../../styles/Profile.module.css";
import { Col, Row, Typography } from "antd";

const Profile = () => {
  return (
    <Layouts>
      <div className={styles.container}>
        <Row justify="space-between" className={styles.container1}>
          <Col
            xs={{ span: 1 }}
            sm={1}
            md={{ span: 1, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            xl={{ span: 1, offset: 1 }}
            xxl={{ span: 1 }}
          >
            <div className={styles.imgs}>
              <img src="/assets/images/insta.png" alt="No Image Found" />
              <br />
              <br />
              <img src="/assets/images/linkd.png" alt="No Image Found" />
              <br />
              <br />
              <img src="/assets/images/youtube.png" alt="No Image Found" />
            </div>
          </Col>
          <Col
            sm={1}
            xs={{ span: 1 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1, pull: 3 }}
            xl={{ span: 2, offset: 3 }}
            xxl={{ span: 1, pull: 1 }}
          >
            <img
              height={150}
              width={150}
              src="/assets/images/profile.png"
              className={styles.img}
              alt="No Image Found"
            />
          </Col>
          <Col
            sm={20}
            xs={{ span: 20 }}
            md={{ span: 16, offset: 1 }}
            lg={{ span: 13, offset: 1, pull: 3 }}
            xl={{ span: 16, offset: 1 }}
            xxl={{ span: 17, pull: 1 }}
            style={{
              marginTop: "-2rem",
            }}
          >
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
            <br />
            <p className={styles.para}>
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

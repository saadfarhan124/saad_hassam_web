import React from "react";
import styles from "../../styles/Home.module.css";
import { Col, Row, Typography } from "antd";
import Footer from "../footer";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Row justify="space-between" className={styles.container1}>
          <Col
            xs={{ span: 1, offset: 1 }}
            sm={1}
            md={{ span: 1, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            xl={{ span: 1, offset: 1 }}
            xxl={{ span: 1 }}
          >
            <div
              className={styles.imgs}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.instagram.com/hassamarts/"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <FaInstagram className={styles.icon} size={30} color="white" />
              </a>
              <br />{" "}
              <a
                href="https://www.linkedin.com/in/saad-hassam-b6950b70"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <FaLinkedin className={styles.icon} size={30} color="white" />
              </a>
              <br />{" "}
              <a
                href="https://www.youtube.com/channel/UCxCL8vMyNqTOkI0RWXM_FRw"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <FaYoutube className={styles.icon} size={30} color="white" />
              </a>
              <br />
              <img className={styles.line} src="/assets/images/line.png" />
            </div>
          </Col>
          <Col
            sm={1}
            xs={{ span: 1 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1, pull: 2 }}
            xl={{ span: 1, offset: 1 }}
            xxl={{ span: 1, pull: 1 }}
          >
            <img
              height={200}
              width={200}
              src="/assets/images/profile.png"
              className={styles.img}
              alt="No Image Found"
            />
          </Col>
          <Col
            sm={20}
            xs={{ span: 20 }}
            md={{ span: 13, offset: 1 }}
            lg={{ span: 12, offset: 1, pull: 2 }}
            xl={{ span: 14, offset: 0 }}
            xxl={{ span: 17, pull: 1 }}
            style={{
              marginTop: "-2rem",
              marginLeft: "0.5rem",
            }}
          >
            <h1 className={styles.title1}>Saad Hassam</h1>

            <h1 className={styles.title2}>Designer/Concept Artist</h1>

            <p className={styles.para}>
              As an artist with a background in traditional, abstract, and
              concept art, as well as theater, I have a diverse range of
              experiences that inform my work. My skillset encompasses
              traditional and digital art, animation, and UI/UX engineering,
              using tools such as Figma, Adobe Creative Suite, and Blender. I am
              constantly exploring new technologies and techniques to expand my
              artistic expression and am currently focused on AI art. I approach
              my art with a grounded and innovative mindset, always striving to
              create something fresh and unique.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;

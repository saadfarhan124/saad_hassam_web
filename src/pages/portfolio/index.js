import Layouts from "@/components/layouts";
import React from "react";
import styles from "../../styles/Portfolio.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Image, Typography } from "antd";
import Slider from "react-slick";

const images1 = [
  { url: "/assets/images/1.png", height: "30vh" },
  { url: "/assets/images/two.png", height: "60vh" },
  { url: "/assets/images/3.png", height: "60vh" },
  { url: "/assets/images/4.png", height: "40vh" },
  { url: "/assets/images/5.png", height: "20vh" },
  { url: "/assets/images/6.png", height: "60vh" },
  { url: "/assets/images/7.png", height: "60vh" },
  { url: "/assets/images/6.png", height: "80vh" },
  { url: "/assets/images/10.png", height: "67vh" },
];

const images = [
  "/assets/images/p1.png",
  "/assets/images/p2.png",
  "/assets/images/p3.png",
  "/assets/images/p4.png",
];

const images2 = [
  "/assets/images/q1.png",
  "/assets/images/q2.png",
  "/assets/images/q3.png",
];

const images3 = ["/assets/images/b1.png", "/assets/images/b2.png"];
const images4 = ["/assets/images/c1.png", "/assets/images/c2.png"];

const Portfolio = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}>
        <MdArrowBackIos onClick={onClick} style={{ ...arrowStyle }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}>
        <MdArrowForwardIos onClick={onClick} style={{ ...arrowStyle }} />
      </div>
    );
  }

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    fontSize: 60,
    color: "black",
    cursor: "pointer",
  };
  return (
    <Layouts>
      <div className={styles.container}>
        <div className={styles.innercontainer}>
          <Slider {...settings}>
            <div className={styles.container3}>
              <Row className={styles.row}>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={16}
                  xl={10}
                  xxl={8}
                  className={styles.col1}
                >
                  <div className={styles.textbox}>
                    <div className={styles.texts}>
                      <Typography.Title className={styles.c1}>
                        CDL 1000
                      </Typography.Title>
                      <Typography.Text className={styles.c2}>
                        UI/UX Design lead
                      </Typography.Text>
                      <br />

                      <Typography.Text className={styles.c3}>
                        Case Study
                      </Typography.Text>

                      <Typography.Text className={styles.c4}>
                        This case study describes the successful redesign of a
                        logistic company's website, including the homepage,
                        service pages, tracking pages, and contact pages. The
                        redesign aimed to improve the website's functionality,
                        increase engagement, and ultimately drive more
                        conversions. The new website includes a tracking system,
                        an intuitive service page, and a user-friendly contact
                        page, which have all received positive feedback from
                        customers. The redesign has resulted in a modern and
                        functional website that better serves the company's
                        customers' needs, improving the user experience, and
                        leading to increased engagement and more conversions.
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={14}
                  xxl={11}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images[1]}
                      width={800}
                      height={400}
                      preview={false}
                      className={styles.firstImage}
                    />

                    <Row className={styles.row2}>
                      <Col xs={24} md={10} lg={12} xl={{ span: 12 }} xxl={12}>
                        <Image
                          className={styles.colr1}
                          src={images[2]}
                          width={400}
                          height={200}
                          preview={false}
                        />
                      </Col>
                      <Col
                        xs={24}
                        md={10}
                        lg={{ span: 12, pull: 1 }}
                        xl={{ span: 12, push: 2 }}
                        xxl={{ span: 12, push: 4 }}
                      >
                        <Image
                          className={styles.colr2}
                          src={images[3]}
                          width={400}
                          height={200}
                          preview={false}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.container5}>
              <Row className={styles.row}>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={{ span: 8 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images3[0]}
                      width={300}
                      height={600}
                      preview={false}
                      className={styles.b1}
                    />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={8}
                  xl={{ span: 9, pull: 2 }}
                  xxl={8}
                  className={styles.col1}
                >
                  <div className={styles.textbox1}>
                    <div className={styles.texts}>
                      <Typography.Title className={styles.c1}>
                        Behtar App
                      </Typography.Title>
                      <Typography.Text className={styles.c2}>
                        Creator
                      </Typography.Text>
                      <br />

                      <Typography.Text className={styles.c3}>
                        Case Study
                      </Typography.Text>

                      <Typography.Text className={styles.c4}>
                        I began my journey in the world of art, creating
                        realistic paintings and drawings. But as time went on,
                        my artistic vision began to evolve. I found myself
                        exploring the abstract, experimenting with simple
                        shapes, and pushing the boundaries of what was possible.
                        Through my career, I never stopped creating art, always
                        striving to create something new and unique.
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={4}
                  xxl={4}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images3[1]}
                      width={450}
                      height={600}
                      preview={false}
                      className={styles.b2}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.container6}>
              <Row className={styles.row}>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={{ span: 8 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images4[0]}
                      width={300}
                      height={600}
                      preview={false}
                      className={styles.b1}
                    />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={8}
                  xl={{ span: 9, pull: 2 }}
                  xxl={8}
                  className={styles.col1}
                >
                  <div className={styles.textbox1}>
                    <div className={styles.texts}>
                      <Typography.Title className={styles.c1}>
                        CDL 1000 Dispatch
                      </Typography.Title>
                      <Typography.Text className={styles.c2}>
                        UI/UX Design lead
                      </Typography.Text>
                      <br />

                      <Typography.Text className={styles.c3}>
                        Case Study
                      </Typography.Text>

                      <Typography.Text className={styles.c4}>
                        This case study describes the successful redesign of a
                        logistic company's website, including the homepage,
                        service pages, tracking pages, and contact pages. The
                        redesign aimed to improve the website's functionality,
                        increase engagement, and ultimately drive more
                        conversions. The new website includes a tracking system,
                        an intuitive service page, and a user-friendly contact
                        page, which have all received positive feedback from
                        customers. The redesign has resulted in a modern and
                        functional website that better serves the company's
                        customers' needs, improving the user experience, and
                        leading to increased engagement and more conversions.
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={4}
                  xxl={4}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images4[1]}
                      width={450}
                      height={600}
                      preview={false}
                      className={styles.b2}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.container4}>
              <Row className={styles.row}>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={16}
                  xl={10}
                  xxl={8}
                  className={styles.col1}
                >
                  <div className={styles.textbox}>
                    <div className={styles.texts}>
                      <Typography.Title className={styles.c1}>
                        Code Clan Web
                      </Typography.Title>
                      <Typography.Text className={styles.c2}>
                        Role Title
                      </Typography.Text>
                      <br />

                      <Typography.Text className={styles.c3}>
                        Case Study
                      </Typography.Text>

                      <Typography.Text className={styles.c4}>
                        I began my journey in the world of art, creating
                        realistic paintings and drawings. But as time went on,
                        my artistic vision began to evolve. I found myself
                        exploring the abstract, experimenting with simple
                        shapes, and pushing the boundaries of what was possible.
                        Through my career, I never stopped creating art, always
                        striving to create something new and unique.
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  xl={14}
                  xxl={11}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images2[0]}
                      width={700}
                      height={400}
                      preview={false}
                      className={styles.firstImage}
                    />

                    <Row className={styles.row2}>
                      <Col xs={24} md={10} lg={12} xl={{ span: 12 }} xxl={12}>
                        <Image
                          className={styles.colr1}
                          src={images2[1]}
                          width={300}
                          height={200}
                          preview={false}
                        />
                      </Col>
                      <Col
                        xs={24}
                        md={10}
                        lg={{ span: 12, pull: 1 }}
                        xl={{ span: 12, push: 2 }}
                        xxl={{ span: 12, push: 4 }}
                      >
                        <Image
                          className={styles.colr2}
                          src={images2[2]}
                          width={300}
                          height={200}
                          preview={false}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.misonary}>
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  320: 1,
                  710: 2,
                  900: 4,
                  1023: 2,
                  1100: 4,
                  2100: 6,
                }}
                columnGutter={10}
              >
                <Masonry>
                  {images1.map((image, i) => (
                    <img
                      key={i}
                      src={image.url}
                      style={{
                        padding: "10px",
                        width: image.width,
                        height: image.height,
                        display: "block",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </Slider>
        </div>
      </div>
    </Layouts>
  );
};
export default Portfolio;

import Layouts from "@/components/layouts";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Portfolio.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Image, Typography } from "antd";
import Slider from "react-slick";
import Footer from "../footer";

const images1 = [
  { url: "/assets/images/1.png" },
  { url: "/assets/images/3.png" },
  { url: "/assets/images/5.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/7.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/1.png" },
  { url: "/assets/images/1.png" },
  { url: "/assets/images/3.png" },
  { url: "/assets/images/5.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/4.png" },
  { url: "/assets/images/10.png" },
  { url: "/assets/images/1.png" },
  { url: "/assets/images/3.png" },
  { url: "/assets/images/5.png" },
];

const images = [
  "/assets/images/p1.png",
  "/assets/images/cdl.png",
  "/assets/images/p3.png",
  "/assets/images/p4.png",
];

const images2 = [
  "/assets/images/clan.png",
  "/assets/images/q2.png",
  "/assets/images/q3.png",
];

const images3 = ["/assets/images/b1.png", "/assets/images/b2.png"];
const images4 = ["/assets/images/c1.png", "/assets/images/c2.png"];

const Portfolio = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
    console.log(scrollTop);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;

    const isFirstSlide = currentSlide === 0;
    if (isFirstSlide) {
      return null;
    }
    if (scrollTop > 20) {
      return null;
    }
    return (
      <div className={className}>
        <MdArrowBackIos onClick={onClick} style={{ ...arrowStyle }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;

    const isLastSlide = currentSlide === slideCount - 1;
    if (isLastSlide) {
      return null;
    }

    return (
      <div className={className}>
        <MdArrowForwardIos onClick={onClick} style={{ ...arrowStyle }} />
      </div>
    );
  }

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    left: "-50%",
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
                  md={24}
                  lg={12}
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
                        logistic company&apos;s website, including the homepage,
                        service pages, tracking pages, and contact pages. The
                        redesign aimed to improve the website&apos;s
                        functionality, increase engagement, and ultimately drive
                        more conversions. The new website includes a tracking
                        system, an intuitive service page, and a user-friendly
                        contact page, which have all received positive feedback
                        from customers. The redesign has resulted in a modern
                        and functional website that better serves the
                        company&apos;s customers&apos; needs, improving the user
                        experience, and leading to increased engagement and more
                        conversions.
                      </Typography.Text>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={7}
                  xl={14}
                  xxl={11}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images[1]}
                      width={850}
                      height={670}
                      preview={false}
                      className={styles.firstImage}
                    />

                    {/* <Row className={styles.row2}>
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
                        lg={{ span: 12 }}
                        xl={{ span: 11 }}
                        xxl={{ span: 10 }}
                      >
                        <Image
                          className={styles.colr2}
                          src={images[3]}
                          width={400}
                          height={200}
                          preview={false}
                        />
                      </Col>
                    </Row> */}
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.container5}>
              <Row className={styles.row}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={5}
                  xl={{ span: 6, push: 0 }}
                  xxl={{ span: 6 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images3[0]}
                      width={250}
                      height={500}
                      preview={false}
                      className={styles.b1}
                    />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={11}
                  xl={{ span: 9, pull: 1 }}
                  xxl={{ span: 9, pull: 0 }}
                  className={styles.col1}
                >
                  <div className={styles.textbox1}>
                    <div className={styles.texts1}>
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
                  xxl={{ span: 9, pullL: 2 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images3[1]}
                      width={400}
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
                  md={24}
                  lg={5}
                  xl={{ span: 6 }}
                  xxl={{ span: 6, push: 1 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images4[0]}
                      width={250}
                      height={500}
                      preview={false}
                      className={styles.b1}
                    />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={11}
                  xl={{ span: 9, pull: 1 }}
                  xxl={{ span: 9, pull: 0 }}
                  className={styles.col1}
                >
                  <div className={styles.textbox1}>
                    <div className={styles.texts1}>
                      <Typography.Title className={styles.d1}>
                        CDL 1000 Dispatch
                      </Typography.Title>
                      <Typography.Text className={styles.d2}>
                        UI/UX Design lead
                      </Typography.Text>

                      <Typography.Text className={styles.d3}>
                        Case Study
                      </Typography.Text>

                      <Typography.Text className={styles.d4}>
                        This case study describes the successful redesign of a
                        logistic company&apos;s website, including the homepage,
                        service pages, tracking pages, and contact pages. The
                        redesign aimed to improve the website&apos;s
                        functionality, increase engagement, and ultimately drive
                        more conversions. The new website includes a tracking
                        system, an intuitive service page, and a user-friendly
                        contact page, which have all received positive feedback
                        from customers. The redesign has resulted in a modern
                        and functional website that better serves the
                        company&apos;s customers&apos; needs, improving the user
                        experience, and leading to increased engagement and more
                        conversions.
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
                  xxl={{ span: 9, pull: 2 }}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images4[1]}
                      width={400}
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
                  md={24}
                  lg={10}
                  xl={8}
                  xxl={8}
                  className={styles.col1}
                >
                  <div className={styles.clanbox}>
                    <div className={styles.textclan}>
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
                  lg={7}
                  xl={13}
                  xxl={11}
                  className={styles.col}
                >
                  <div className={styles.overlay}>
                    <Image
                      src={images2[0]}
                      width={600}
                      height={623}
                      preview={false}
                      className={styles.clanImage}
                    />

                    {/* <Row className={styles.row2}>
                      <Col xs={24} md={10} lg={12} xl={{ span: 12 }} xxl={12}>
                        <Image
                          className={styles.colr1}
                          src={images2[1]}
                          width={400}
                          height={250}
                          preview={false}
                        />
                      </Col>
                      <Col
                        xs={24}
                        md={10}
                        lg={{ span: 12, pull: 1 }}
                        xl={{ span: 12, push: 2 }}
                        xxl={{ span: 12 }}
                      >
                        <Image
                          className={styles.colr2}
                          src={images2[2]}
                          width={400}
                          height={200}
                          preview={false}
                        />
                      </Col>
                    </Row> */}
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.misonary} onScroll={handleScroll}>
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
      <Footer />
    </Layouts>
  );
};
export default Portfolio;

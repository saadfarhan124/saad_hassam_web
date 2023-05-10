import React, { useEffect, useState } from "react";
import styles from "../../styles/Portfolio.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Image, Typography } from "antd";
import Footer from "../footer";
import Slider from "react-slick";

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

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight * 3.1, behavior: "smooth" });
    setIsScrolled(true);
  };

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

    const isLastSlide = currentSlide === slideCount - 2;
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
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <Slider {...settings} className={styles.slider}>
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
                    <br />
                    <br />

                    <Typography.Text className={styles.c4}>
                      As a UI/UX designer, I led the revamp and redesign of
                      CDL1000&apos;s website to give it a modern look and feel.
                      The project was initiated after the company was featured
                      on Inc 5000. I recreated the entire brand, which included
                      updating the color scheme, typography, and overall design
                      language. Additionally, I redesigned the website&apos;s
                      quoting engine to match the new look and feel, providing a
                      seamless and intuitive user experience for visitors. The
                      revamped website was well-received by both the company and
                      its customers, establishing a modern digital presence for
                      CDL1000.
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

                    <Typography.Text className={styles.c4}>
                      A cutting-edge meditation app featuring a modern user
                      interface has been designed and developed, enabling users
                      to schedule guided meditation sessions, access recorded
                      guides, or communicate directly with an astrologer. The
                      app&apos;s advanced features allow for a customized
                      meditation experience, catering to individual preferences
                      and needs. Modern UI/UX practices have been incorporated,
                      including intuitive navigation and visually appealing
                      graphics and animations, ensuring a seamless and engaging
                      user experience. The app is a powerful tool for enhancing
                      meditation practices and cultivating inner peace and
                      mindfulness.
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
                    <Typography.Title className={styles.c1}>
                      Driver Tracking App
                    </Typography.Title>
                    <Typography.Text className={styles.c2}>
                      UI/UX Design lead
                    </Typography.Text>
                    <br />

                    <Typography.Text className={styles.c4}>
                      As a UI/UX lead specializing in modern design practices
                      and technology, I developed a tracking app for CDL1000, a
                      transportation and logistics company, that provides live
                      tracking, document upload, real-time notifications, and
                      driver-POC communication. The app enhances CDL1000&apos;s
                      operational efficiency and enables real-time monitoring of
                      shipments. Drivers can easily upload documents throughout
                      the delivery process, while real-time notifications and
                      driver-POC communication ensure seamless coordination.
                      Overall, the CDL1000 tracking app is a powerful tool that
                      streamlines logistics operations and improves the customer
                      experience.
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
                      Graphic Director
                    </Typography.Text>
                    <br />

                    <Typography.Text className={styles.c4}>
                      I had the pleasure of working as a UI/UX lead with Code
                      Clan, a software development company, to design a landing
                      web page that serves as the backbone of their online
                      presence. The website features a sleek, modern design that
                      showcases Code Clan&apos;s exceptional software
                      development services, their team of experts, and their
                      impressive portfolio of past projects. By carefully
                      balancing the design and functionality, we were able to
                      create a landing page that delivers an immersive and
                      engaging user experience, attracting potential clients and
                      establishing Code Clan as a top-tier software development
                      company.
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
        <div className={styles.downarrow}>
          <MdArrowBackIos
            onClick={handleScrollClick}
            size={60}
            style={{
              transform: isScrolled ? "rotate(270deg)" : "rotate(270deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

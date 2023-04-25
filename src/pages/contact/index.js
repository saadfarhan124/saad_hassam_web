import React from "react";
import styles from "../../styles/Contact.module.css";
import Layouts from "../layouts";
import { Col, Row } from "antd";
import Footer from "../footer";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <Layouts />
      </div>
      <Footer />
    </>
  );
};

export default Contact;

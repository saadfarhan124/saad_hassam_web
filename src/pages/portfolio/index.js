import React from "react";
import Layouts from "../layouts";
import Footer from "../footer";
import { JustifiedGrid } from "@egjs/react-grid";
import styles from "../../styles/Portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <Layouts />
      <div className={styles.box}>
        <JustifiedGrid
          className={styles.container}
          gap={10}
          defaultDirection={"start"}
          columnRange={[1, 5]}
          rowRange={[1, 3]}
          sizeRange={[100, 300, 700, 1000]}
          isCroppedSize={false}
          displayedRow={-1}
        >
          <div className={styles.item}>1</div>
          <div className={styles.item}>2</div>
          <div className={styles.item}>3</div>
          <div className={styles.item}>4</div>
          <div className={styles.item}>5</div>
          <div className={styles.item}>6</div>
          <div className={styles.item}>7</div>
          <div className={styles.item}>8</div>
          <div className={styles.item}>9</div>
          <div className={styles.item}>10</div>
        </JustifiedGrid>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;

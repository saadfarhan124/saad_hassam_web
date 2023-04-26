import Layouts from "@/components/layouts";
import React from "react";
import styles from "../../styles/Portfolio.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
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

const Portfolio = () => {
  return (
    <Layouts>
      <div className={styles.box}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 710: 2, 900: 4, 1000: 4 }}
          columnGutter={10}
        >
          <Masonry>
            {images.map((image, i) => (
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
    </Layouts>
  );
};

export default Portfolio;

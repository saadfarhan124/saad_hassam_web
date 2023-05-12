import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../../styles/Grid.module.css";
import { Image } from "antd";

const images1 = [
  { url: "/assets/images/1.png" },
  { url: "/assets/images/3.png" },
  { url: "/assets/images/4.png" },
  { url: "/assets/images/6.png" },
  { url: "/assets/images/7.png" },
  { url: "/assets/images/10.png" },
  { url: "/assets/images/11.jpeg" },
  { url: "/assets/images/12.jpeg" },
  { url: "/assets/images/13.jpeg" },
  { url: "/assets/images/14.jpeg" },
  { url: "/assets/images/15.jpeg" },
  { url: "/assets/images/17.jpeg" },
  { url: "/assets/images/18.jpeg" },
  { url: "/assets/images/19.jpeg" },
  { url: "/assets/images/20.jpeg" },
];
const Grid = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.misonary}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            499: 1,
            710: 3,
            900: 4,
            1023: 2,
            1100: 4,
            2100: 6,
          }}
          columnGutter={10}
        >
          <Masonry>
            {images1.map((image, i) => (
              <Image
                key={i}
                src={image.url}
                width={image.width}
                height={image.height}
                preview={false}
                style={{
                  padding: "10px",
                  display: "block",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt="No Image Found"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Grid;

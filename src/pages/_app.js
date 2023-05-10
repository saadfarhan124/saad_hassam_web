import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="name" content="Saad Hassam" />
        <meta
          name="description"
          content="As an artist with a background in traditional, abstract, and concept art, as well as theater, I have a diverse range of experiences that inform my work. My skillset encompasses traditional and digital art, animation, and UI/UX engineering, using tools such as Figma, Adobe Creative Suite, and Blender. I am constantly exploring new technologies and techniques to expand my artistic expression and am currently focused on AI art. I approach my art with a grounded and innovative mindset, always striving to create something fresh and unique."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="As an artist with a background in traditional, abstract, and concept art, as well as theater, I have a diverse range of experiences that inform my work. My skillset encompasses traditional and digital art, animation, and UI/UX engineering, using tools such as Figma, Adobe Creative Suite, and Blender. I am constantly exploring new technologies and techniques to expand my artistic expression and am currently focused on AI art. I approach my art with a grounded and innovative mindset, always striving to create something fresh and unique."
        />
        <meta property="og:title" content="Saad Hassam" />
        {/* <meta property="og:url" content="https://saadhassam.com" /> */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <title>Saad Hassam - Concept Artist</title>
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#231942",
            fontFamily: "Inter",
          },
          components: {
            Input: {
              colorBorder: "#231942",
            },
            InputNumber: {
              colorBorder: "#231942",
            },
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

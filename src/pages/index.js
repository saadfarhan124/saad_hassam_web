import dynamic from "next/dynamic";
import HomePage from "./home";
import Layouts from "../components/layouts";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Grid from "./grid";
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));
export default function Home() {

  return (
    <>
      <Layouts>
        <div id="home">
          <HomePage />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="grid">
          <Grid />
        </div>
        <div id="contact">
          <Contact />
        </div>
        {/* <Footer/> */}
      </Layouts>
    </>
  );
}

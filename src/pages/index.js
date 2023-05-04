import HomePage from "./home";
import Layouts from "../components/layouts";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Grid from "./grid";

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
      </Layouts>
    </>
  );
}

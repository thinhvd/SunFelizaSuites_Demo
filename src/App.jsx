import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { About2 } from "./components/about2";
import { About3 } from "./components/about3";
import { About4 } from "./components/about4";
import { About5 } from "./components/about5";
import { About6 } from "./components/about6";
import { About7 } from "./components/about7";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { FloatingSignup } from "./components/FloatingSignup";
//test

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <About2 data={landingPageData.About2} />
      <About3 data={landingPageData.About3} />
      <About4 data={landingPageData.About4} />
      <About5 data={landingPageData.About5} />
      <About6 data={landingPageData.About6} />
      <About7 data={landingPageData.About7} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
      <FloatingSignup />
    </div>
  );
};

export default App;

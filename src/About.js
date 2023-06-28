import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
      <Footer />

    </>
  );
}

export default About;

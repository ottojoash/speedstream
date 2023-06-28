import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import Common from "./Common";
import web from "../src/Pictures/logo.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Common style={{ color: 'brown' }}
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

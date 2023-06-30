import React from "react";
import Common from "./Common";
import web from "../src/Pictures/logo.png";
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

const styles = {
  img: {
    '@media (max-width: 767px)': {
      width: '50%',
    },
  },
};

export default Home;

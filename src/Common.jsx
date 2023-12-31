import React from "react";
import { NavLink } from "react-router-dom";

function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name" style={{ color: 'brown' }}>SpeedStream Inc.</strong>
                  </h1>

                  <h2 className="my-3">
                    Let's start customizing your experience!
                  </h2>

                  <div className="mt-3" style={{ color: 'brown' }}>
                    <NavLink to={visit} className="btn-get-started" style={{ color: 'brown' }}>
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                    style={styles.img}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  img: {
    '@media (max-width: 767px)': {
      
      width: '80%',
    },
  },
};

export default Common;

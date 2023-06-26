import React from "react";
import Card from "./Card";
import img2 from "../src/Pictures/img2.png";


const serviceData = [
  {
    title: "Unlimited For 2000UGX",
    imgsrc: img2,
    description: "This is a daily bundle that lasts for 24hrs with unlimited browsing and entertainment",
  },
  {
    title: "Unlimited For 12000UGX",
    imgsrc: img2,
    description: "This is a weekly bundle that lasts for 7days with unlimited browsing and entertainment",
  },
  {
    title: "Unlimited For 20000UGX",
    imgsrc: img2,
    description: "This is a monthly bundle that lasts for 30days with unlimited browsing",
  },
];

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {serviceData.map((service, index) => (
                <Card
                  key={index}
                  title={service.title}
                  imgsrc={service.imgsrc}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

import React from "react";
import devImg from "../assets/dev.gif";
const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center gx-0">
          <div className="col-md-6">
            <img src={devImg} alt="loading..." height={600} />
          </div>
          <div className="col-md-6">
            <div className="brand-container">
              <h1 data-aos="slide-right">
                <b>WELCOME TO</b>
              </h1>
              <p data-aos="slide-left">
                Rotating <b>Landing Page</b> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

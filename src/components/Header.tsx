import React from "react";

const Header = () => {
  const faceImg = require("../assets/images/face.jpg");
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container w-100">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="info-holder">
              <h1 className="text-white font-800">
                Hi, <br /> I'm <span className="gradient-text">Adelite</span>{" "}
                SHEMA NIYONSHUTI
              </h1>
              <p className="text-gray1 text-xl mt-4 ">
                Passionate Software developer with 6+ years in the field. Highly
                experienced in web based apps development.
              </p>
              <p className="text-gray1 text-xl mt-4 d-none">
                My heart beats passionately for software development.
              </p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div className="face-img-holder">
              <img src={faceImg} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

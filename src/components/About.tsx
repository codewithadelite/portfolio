import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  const faceImg = require("../assets/images/face.jpg");
  return (
    <>
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
                  Passionate Software developer, specializes in web
                  applications.
                </p>
                <a href="https://github.com/codewithadelite" target="blank">
                  <button className="btn btn-success bg-green py-2 px-3">
                    <i className="fa-brands fa-github"></i>
                  </button>
                </a>
                <a
                  href="https://linkedin.com/in/niyonshuti-shema-adelite-5b078a278
"
                  target="blank"
                >
                  <button className="btn btn-success bg-green py-2 px-3 mx-2">
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </a>
                <a href="mailto:niadelite@gmail.com">
                  <button class="btn btn-success bg-green py-2 px-3">
                    <i class="fa-regular fa-envelope"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <div className="face-img-holder">
                <img src={faceImg} alt="face" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-100 vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-center w-100">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <h1 className="bg-green px-5 py-3 font-800 text-gray2 ">About</h1>
            </AnimationOnScroll>
          </div>
          <div className="container">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <p className="text-gray1 text-xl mt-3 text-center">
                The name is <span className="gradient-text">Adelite</span>{" "}
                Niyonshuti Shema and I'm software developer. I work mostly with
                Python/Django and Javascript/React to create web based
                applications. I’ve demonstrated the ability to work alone
                efficiently with minimal supervision, as well in the team in
                order to achieve deliverable results.
              </p>
              <p className="text-gray1 text-xl mt-3 text-center">
                In addition to coding and learning new tech, I enjoy playing
                football ⚽ and listening musics 🎵. If any of these things
                interest you too, I'd love to chat!
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

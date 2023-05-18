import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const TechStack = () => {
  const python = require("../assets/images/logos/python.png");
  const django = require("../assets/images/logos/django.png");
  const drf = require("../assets/images/logos/drf.png");
  const mysql = require("../assets/images/logos/mysql.png");
  const javascript = require("../assets/images/logos/javascript.png");
  const typescript = require("../assets/images/logos/typescript.png");
  const react = require("../assets/images/logos/react.png");
  const html = require("../assets/images/logos/html.png");
  const css = require("../assets/images/logos/css.png");
  const bootstrap = require("../assets/images/logos/bootstrap.png");
  return (
    <div className="container w-100 vh-100 d-flex align-items-center justify-content-center mt-5">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-center w-100">
          <h1 className="bg-green px-5 py-3 font-800 text-gray2 ">Skills</h1>
        </div>
        <div className="container mt-3  ">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img src={python} alt="" className="tech-icon" />
                          <span className="font-800 text-gray1 ml-3">
                            {" "}
                            &nbsp; PYTHON
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img src={django} alt="" className="tech-icon" />
                          <span className="font-800 text-gray1 ml-3">
                            {" "}
                            &nbsp; DJANGO
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img src={drf} alt="" className="tech-icon" />
                          <span className="font-800 text-gray1 ml-3">
                            {" "}
                            &nbsp; DRF
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img src={mysql} alt="" className="tech-icon" />
                          <span className="font-800 text-gray1 ml-3">
                            {" "}
                            &nbsp; MYSQL
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img
                            src={javascript}
                            alt=""
                            className="tech-icon rounded"
                          />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; JAVASCRIPT
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img
                            src={typescript}
                            alt=""
                            className="tech-icon rounded"
                          />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; TYPESCRIPT
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img
                            src={html}
                            alt=""
                            className="tech-icon rounded"
                          />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; HTML
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img src={css} alt="" className="tech-icon rounded" />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; CSS
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img
                            src={react}
                            alt=""
                            className="tech-icon rounded"
                          />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; REACT
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="p-3 bg-gray3 shadow-3xl rounded tech-holder">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="d-flex align-items-center">
                          <img
                            src={bootstrap}
                            alt=""
                            className="tech-icon rounded"
                          />
                          <span className="font-800 text-gray1  ml-3">
                            {" "}
                            &nbsp; BOOTSTRAP
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="progress-holder">
                          <div
                            className="progress-percent"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

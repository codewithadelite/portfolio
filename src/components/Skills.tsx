import React from "react";

interface Skill {
  name: string;
  icon: string;
}
const Skills = () => {
  const skills: Skill[] = require("../data/skills.json");
  return (
    <div className="container w-100 vh-100  d-flex align-items-center justify-content-center">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-center w-100">
          <h1 className="bg-green px-5 py-3 font-800 text-gray2 ">Skills</h1>
        </div>
        <div className="container">
          <p className="text-gray1 text-xl mt-3 text-center">
            The scope of technologies and tools that I specialize in are listed
            below.
          </p>
        </div>
        <div className="container skills-holder  rounded mt-4 mb-4 p-1">
          <div className="row pt-5 text-center">
            {skills.map((skill, indx) => (
              <div className="col-lg-2 col-md-3 col mb-5 text-center text-white">
                <div className="skill-holder shadow rounded p-3">
                  <i className={`${skill.icon} icon`}></i> <br />
                  <span className="mt-5">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

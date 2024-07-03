import React from "react";

interface Props {
  name: string;
  details: any;
  image: any;
  web?: string;
  video?: string;
  github?: string;
  openDetailsModal(details: string): any;
  openVideoModal(video: string): any;
}
const ProjectDetail = (props: Props) => {
  return (
    <div className="col-lg-6 mt-4">
      <div className="project-holder bg-gray3 w-100 rounded">
        <div className="image-holder w-100">
          <img src={props.image} className="w-100" alt="" />
        </div>
        <div className="text-holder p-3  mt-4">
          <h5 className="text-white font-800">{props.name}</h5>
        </div>
        <div className="buttons-group p-3 ">
          <button
            className="btn btn-success bg-green py-2 px-4 mb-2"
            onClick={() => props.openDetailsModal(props.details)}
          >
            <i className="fa fa-eye mr-2"></i> Description
          </button>{" "}
          {props.video && (
            <button
              className="btn btn-success bg-green py-2 px-4 mb-2"
              onClick={() => props.openVideoModal(props.video as string)}
            >
              <i className="fa fa-video mr-2"></i> Demo
            </button>
          )}{" "}
          {props.web && (
            <a href={props.web} target="blank">
              <button className="btn btn-success bg-green py-2 px-4 mb-2">
                <i className="fa fa-globe mr-2"></i>
              </button>
            </a>
          )}{" "}
          {props.github && (
            <a href={props.github} target="blank">
              <button className="btn btn-success bg-green py-2 px-4 mb-2">
                <i className="fa-brands fa-github mr-2"></i>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

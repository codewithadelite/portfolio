import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { Modal } from "react-bootstrap";

interface Project {
  name: string;
  image: any;
  video?: string;
  github?: string;
  details: any;
}

const Projects = () => {
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [details, setDetails] = useState<string>("");
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const openDetailsModal = (details: string): void => {
    setDetails(details);
    setShowDetailsModal(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  const openVideoModal = (video: string): void => {
    setVideo(video);
    setShowVideo(true);
  };

  const ihuriro1: any = require("../assets/images/projects/dash.png");
  const domain: any = require("../assets/images/projects/domain10.png");

  const ihuriroDetails = () => {
    return (
      <div>
        <p>
          Ihuriro is an online platform built to simplfy connection between
          rwandans lost and found documents, .
        </p>
        <h5>Features:</h5>
        <ul>
          <li>Selling products</li>
        </ul>
      </div>
    );
  };

  const dnmToolDetails = () => {
    return (
      <div>
        <p>
          DNM TOOL is a tool built to manage, visualize domain names data
          onboarded in the system with the connection of REST API
        </p>
        <h5>Features:</h5>
        <ul>
          <li>Domains data visualization</li>
          <li>Domains filtering</li>
        </ul>
      </div>
    );
  };

  const projects: Project[] = [
    {
      name: "IHURIRO.COM",
      details: ihuriroDetails,
      image: ihuriro1,
      video:
        "https://www.loom.com/embed/e653dfc90ab242e981a8670cd7a561d8?sid=9a0893d2-f20e-4a7b-aeda-52ce20e84373?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true",
    },
    {
      name: "DNM TOOL",
      details: dnmToolDetails,
      image: domain,
      github: "https://github.com/codewithadelite/domains",
    },
  ];

  return (
    <div className="container w-100  mt-5">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-center w-100">
          <h1 className="bg-green px-5 py-3 font-800 text-gray2 ">Projects</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {projects.map((project, indx) => (
            <ProjectDetail
              image={project.image}
              name={project.name}
              details={project.details()}
              video={project.video}
              github={project.github}
              openDetailsModal={openDetailsModal}
              openVideoModal={openVideoModal}
            />
          ))}
        </div>
      </div>
      <Modal
        show={showDetailsModal}
        size="lg"
        centered
        onHide={closeDetailsModal}
        animation={false}
        contentClassName="p-5 text-light bg-gray3"
        dialogClassName="static-modal"
      >
        <Modal.Header className="d-flex align-items-center ">
          <Modal.Title className="color-gray modal-header-text">
            Project Details
          </Modal.Title>
          <button
            type="button"
            className="btn py-3 btn-success bg-green"
            onClick={closeDetailsModal}
          >
            <div className="d-flex align-items-center  font-600">
              <i className="fa fa-times"></i>
            </div>
          </button>
        </Modal.Header>
        <Modal.Body>{details}</Modal.Body>
      </Modal>

      <Modal
        show={showVideo}
        size="lg"
        centered
        onHide={closeVideoModal}
        animation={false}
        contentClassName="p-5 text-light bg-gray3"
        dialogClassName="static-modal"
      >
        <Modal.Header className="d-flex align-items-center ">
          <Modal.Title className="color-gray modal-header-text">
            Project Demo
          </Modal.Title>
          <button
            type="button"
            className="btn py-3 btn-success bg-green"
            onClick={closeVideoModal}
          >
            <div className="d-flex align-items-center  font-600">
              <i className="fa fa-times"></i>
            </div>
          </button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="demo"
            width="100%"
            allowFullScreen
            allow="autoplay"
            height="315"
            src={video}
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;

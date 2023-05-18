import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Contact = () => {
  const faceImg = require("../assets/images/face.jpg");
  const newicon = new (L.icon as any)({
    iconUrl: faceImg,
    iconSize: [60, 60],
    className: "rounded-circle border-gray",
  });
  return (
    <div className="container w-100  mt-5">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-center w-100 mb-2">
          <h1 className="bg-green px-5 py-3 font-800 text-gray2 ">Contact</h1>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 mb-4">
            <div className="map-holder rounded">
              <MapContainer
                center={[50.85045, 4.34878]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.85045, 4.34878]} icon={newicon}>
                  <Popup>
                    Hi, I'm based in <br /> Belgium.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4">
            <form action="">
              <div className="form-group mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-input border-touch"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="subject"
                  className="form-input border-touch"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-input border-touch"
                  placeholder="Message"
                  name="message"
                  id=""
                  cols={30}
                  rows={4}
                ></textarea>
              </div>
              <div className="form-group mb-4">
                <button className="btn btn-block btn-success bg-green py-3 px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

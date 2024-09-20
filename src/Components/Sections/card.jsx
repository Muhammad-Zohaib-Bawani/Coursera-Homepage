import React from 'react';
import {
    SafetyCertificateTwoTone,

  } from "@ant-design/icons";

function Card({ img, logo, title, heading }) {
  return (
    <div>
      <div className="card" >
        <img
          className="card-img-top"
          src={img}
          alt="Card image cap"
          style={{ padding: "5px", borderRadius: "15px" }}
        />
        <div className="card-body">
          <div style={{ color: "#5b6780", fontSize: "14px" }}>
            <img
              src={logo}
              alt=""
              style={{ height: "24px", width: "24px" }}
            />
            <span className="mx-3">{title}</span>
          </div>
          <h5
            className="card-title pt-2"
            style={{ fontSize: "16px", color: "#000" }}
          >
            {heading}
          </h5>
          <p
            style={{ color: "#0056d2", fontSize: "14px",    paddingTop: "10px" }}
            className="mt-2"
          >
            {/* Replace with the actual icon component */}
            <SafetyCertificateTwoTone /> Make progress toward a degree
          </p>
          <p style={{ color: "#abb0ba", fontSize: "14px",    paddingTop: "20px" }} className="">
            Professional Certificates
          </p>
        </div>
      </div>
    </div>
  );
}

export  default Card;

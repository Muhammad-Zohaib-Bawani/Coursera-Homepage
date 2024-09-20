import React from "react";
import { img1, img2, img3, img4, ibm, google } from "../../Assests/assests";
import {
  SafetyCertificateTwoTone,
  ArrowRightOutlined,
} from "@ant-design/icons";

function Section3() {
  return (
    <div className="container mt-5">
      <h6 style={{ color: "#340385" }}>
        Specializations and Professional Certificates
      </h6>

      <h1 style={{ color: "#0f1114" }}>Most Popular Certificates</h1>

      <h6 style={{ color: "#0f1114" }}>
        Explore our most popular programs, get job-ready for an in-demand
        career.
      </h6>
      <div className="row card-cards">
        <div className="col-3">
          <div className="card" style={{ height: "320px" }}>
            <img
              className="card-img-top"
              src={img1}
              alt="Card image cap"
              style={{ padding: "5px", borderRadius: "15px" }}
            />
            <div className="card-body">
              <div style={{ color: "5b6780", fontSize: "14px" }}>
                <img
                  src={google}
                  alt=""
                  style={{ height: "24px", width: "24px" }}
                />
                <span className="mx-3">Google</span>
              </div>
              <h5
                className="card-title pt-2"
                style={{ fontSize: "16px", color: "#000" }}
              >
                Google Data Analytics
              </h5>
              <p
                style={{ color: "#0056d2", fontSize: "14px" }}
                className="mt-2"
              >
                <SafetyCertificateTwoTone /> Make progress toward a degree
              </p>
              <p style={{ color: "#abb0ba", fontSize: "14px" }} className="">
                Professional Certificates
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ height: "320px" }}>
            <img
              className="card-img-top"
              src={img2}
              alt="Card image cap"
              style={{ padding: "5px", borderRadius: "15px" }}
            />
            <div className="card-body">
              <div style={{ color: "5b6780", fontSize: "14px" }}>
                <img
                  src={google}
                  alt=""
                  style={{ height: "24px", width: "24px" }}
                />
                <span className="mx-3">Google</span>
              </div>
              <h5
                className="card-title pt-2"
                style={{ fontSize: "16px", color: "#000" }}
              >
                Google Project Manager
              </h5>
              <p
                style={{ color: "#0056d2", fontSize: "14px" }}
                className="mt-2"
              >
                <SafetyCertificateTwoTone /> Make progress toward a degree
              </p>
              <p style={{ color: "#abb0ba", fontSize: "14px" }} className="">
                Professional Certificates
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ height: "320px" }}>
            <img
              className="card-img-top"
              src={img3}
              alt="Card image cap"
              style={{ padding: "5px", borderRadius: "15px" }}
            />
            <div className="card-body">
              <div style={{ color: "5b6780", fontSize: "14px" }}>
                <img
                  src={google}
                  alt=""
                  style={{ height: "24px", width: "24px" }}
                />
                <span className="mx-3">Google</span>
              </div>
              <h5
                className="card-title pt-2"
                style={{ fontSize: "16px", color: "#000" }}
              >
                Google IT Support
              </h5>
              <p
                style={{ color: "#0056d2", fontSize: "14px" }}
                className="mt-2"
              >
                <SafetyCertificateTwoTone /> Make progress toward a degree
              </p>
              <p style={{ color: "#abb0ba", fontSize: "14px" }} className="">
                Professional Certificates
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ height: "320px" }}>
            <img
              className="card-img-top"
              src={img4}
              alt="Card image cap"
              style={{
                padding: "5px",
                borderRadius: "15px",
                height: "176.5px",
              }}
            />
            <div className="card-body">
              <div style={{ color: "5b6780", fontSize: "14px" }}>
                <img
                  src={ibm}
                  alt=""
                  style={{ height: "24px", width: "24px" }}
                />
                <span className="mx-3">Google</span>
              </div>
              <h5
                className="card-title pt-2"
                style={{ fontSize: "16px", color: "#000" }}
              >
                IBM Data Science
              </h5>
              <p
                style={{ color: "#0056d2", fontSize: "14px" }}
                className="mt-2"
              >
                <SafetyCertificateTwoTone /> Make progress toward a degree
              </p>
              <p style={{ color: "#abb0ba", fontSize: "14px" }} className="">
                Professional Certificates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3 card-cards    ">
        <div className="col-3 p-3" style={{ width: "15%" }}>
          <button
            className="btn btn-primary"
            style={{ width: "100%", height: "50px" }}
          >
            {" "}
            Show 8 more{" "}
          </button>
        </div>
        <div className="col-3 p-3" style={{ width: "15%" }}>
          <button
            className="btn btn-outline-primary"
            style={{ width: "100%", height: "50px" }}
          >
            View all <ArrowRightOutlined />{" "}
          </button>
        </div>
      </div>

      <div className="row tabs-small">
        <div className="col-12">
          <div
            className="row m-1"
            style={{ border: "2px solid #E9EEF7", borderRadius: "5px" }}
          >
            <div className="col-9">
              <div style={{ color: "5b6780", fontSize: "14px" }}>
                <img
                  src={google}
                  alt=""
                  style={{ height: "24px", width: "24px" }}
                />
                <span className="mx-3">Google</span>
              </div>
              <h5
                className="card-title pt-3"
                style={{ fontSize: "16px", color: "#000" }}
              >
                Google Project Manager
              </h5>
              <p
                style={{ color: "#abb0ba", fontSize: "14px" }}
                className="pt-3"
              >
                Professional Certificates
              </p>
            </div>
            <div className="col-3">
              <img src={img3} alt="" className="custom-card-img " />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="col-12">
            <div
              className="row m-1"
              style={{ border: "2px solid #E9EEF7", borderRadius: "5px" }}
            >
              <div className="col-9">
                <div style={{ color: "5b6780", fontSize: "14px" }}>
                  <img
                    src={ibm}
                    alt=""
                    style={{ height: "24px", width: "24px" }}
                  />
                  <span className="mx-3">IBM</span>
                </div>
                <h5
                  className="card-title pt-3"
                  style={{ fontSize: "16px", color: "#000" }}
                >
                  IBM Project Manager
                </h5>
                <p
                  style={{ color: "#abb0ba", fontSize: "14px" }}
                  className="pt-3"
                >
                  Professional Certificates
                </p>
              </div>
              <div className="col-3">
                <img src={img1} alt="" className="custom-card-img " />
              </div>
            </div>
          </div>
        </div>
        <div className="row tabs-small">
        <div className="col-12">
          <button
            className="btn btn-primary my-3"
            style={{width:"100%"}}
          >
            {" "}
            Show 8 more{" "}
          </button>
        </div>
        <div className="col-12">
          <button
            className="btn btn-outline-primary"
            style={{width:"100%"}}
          
          >
            View all <ArrowRightOutlined />{" "}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section3;

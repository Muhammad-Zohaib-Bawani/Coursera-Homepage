import React from "react";
import { StarFilled } from "@ant-design/icons";
import { jobDataMap } from "../Data/jobTitle";

function Carousel({ jobName }) {

  const jobData = jobDataMap[jobName];

  return (
    <div
      className="container "
      style={{ border: "#f1f6ff 2px solid", borderRadius: "8px",marginTop:"30px" }}
    >
      
        <div className="row main-card" >
          <div className="col-12 col-md-6">
            <h2 className="" style={{ color: "#0F1114", fontWeight: "600" }}>
              {jobData.name}
            </h2>

            <p className="css-u8ikco" style={{ color: "#5B6780" }}>
              {jobData.tagline}
            </p>

            <h3 style={{ color: "#0F1114" }} className="sm-heading mb-3">
              Median Salary
            </h3>

            <div className="row">
              <div className="input-div col-6 ">All occupations</div>

              <div
                className="col-3"
                style={{ padding: "12px 14px", fontSize: "14px" }}
              >
                <span>$37,960</span>
                <sup>*</sup>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-7 input-div2">{jobData.name}</div>

              <div className="col-3">
                <span>${jobData.salary}</span>
                <sup>**</sup>
              </div>
            </div>

            <div className="box3">
              <p className="">
                <span>
                  Job openings:{" "}
                  <strong>
                    <span>{jobData.job_openings}</span>
                    <sup>**</sup>
                  </strong>
                </span>
              </p>
              <p className="css-l3jxb6">
                <span>
                  Projected 10 year growth:{" "}
                  <strong>
                    <span>
                      +<span>{jobData.growth}</span>
                    </span>
                    %<sup>***</sup>
                  </strong>
                </span>
              </p>
            </div>

            <div className="row mt-5 card-cards">
              <div className="col-2">
                <img
                  src={jobData.quote_image}
                  alt=""
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                />
              </div>

              <div className="col-9" style={{ color: "#5B6780" }}>
                <span>"{jobData.quote}"</span>
                <div className="">-{jobData.quote_sayed}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5 card-cards">
            <h2 style={{ fontSize: "20px" }}>
              Recommended Professional Certificates{" "}
            </h2>

            <div className="row">
              <div className="col-6">
                <div className="card " style={{}}>
                  <img
                    className="card-img-top"
                    src={jobData.card1_img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div style={{ color: "5b6780", fontSize: "14px" }}>
                      <img src={jobData.card1_logo} alt="" />
                      {jobData.card1_companyName}
                    </div>
                    <h5
                      className="card-title pt-4"
                      style={{ fontSize: "16px" }}
                    >
                      {jobData.card1_heading}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "#5b6780", fontSize: "14px" }}
                    >
                      {` Skills you'll gain: 
                  People Management, Project Risk Management, Leadership and
                  Management, Project Performance, Stakeholder Engagement,
                  Project Closure, Team Building, Team Management, Risk
                  Management, Program Management, Finance, Organizational
                  Leadership, Business Management, Project Management, Project
                  `.substring(0, 100) + "..."}
                    </p>

                    <div>
                      {jobData.card1_rating}{" "}
                      <StarFilled style={{ color: "#0056d2" }} />{" "}
                      {jobData.card1_reviews} reviews
                      <span>{}</span>
                    </div>
                    <p style={{ color: "#abb0ba", fontSize: "14px" }}>
                      Beginner · Professional Certificate ·{" "}
                      {jobData.card1_duration} months
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div className="card" style={{}}>
                  <img
                    className="card-img-top"
                    src={jobData.card2_img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div style={{ color: "5b6780", fontSize: "14px" }}>
                      <img src={jobData.card2_logo} alt="" />
                    <span className="ml-3">  {jobData.card2_companyName}</span>
                    </div>
                    <h5
                      className="card-title pt-4"
                      style={{ fontSize: "16px" }}
                    >
                      {jobData.card2_heading}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "#5b6780", fontSize: "14px" }}
                    >
                      {` Skills you'll gain: 
                  People Management, Project Risk Management, Leadership and
                  Management, Project Performance, Stakeholder Engagement,
                  Project Closure, Team Building, Team Management, Risk
                  Management, Program Management, Finance, Organizational
                  Leadership, Business Management, Project Management, Project
               
                  Leadership`.substring(0, 100) + "..."}
                    </p>
                    <div>
                      {jobData.card2_rating}{" "}
                      <StarFilled style={{ color: "#0056d2" }} />{" "}
                      <span>( {jobData.card2_reviews} reviews)</span>
                    </div>
                    <p style={{ color: "#abb0ba", fontSize: "14px" }}>
                      Beginner · Professional Certificate ·{" "}
                      {jobData.card2_duration} months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommendations"  style={{ color:"#0056d2" , fontSize:"14px" }}>

          See recommendations
          </div>
        </div>
      
    </div>
  );
}

export default Carousel;


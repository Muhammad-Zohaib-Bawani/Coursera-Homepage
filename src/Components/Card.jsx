import React from "react";
import { StarFilled } from "@ant-design/icons";

function Card() {
  return (
    <div
      className="container"
      style={{ border: "#f1f6ff 2px solid", borderRadius: "8px" }}
    >
      <div className="row" style={{ padding: "48px 80px" }}>
        <div className="col-6">
          <h2 className="" style={{ color: "#0F1114", fontWeight: "600" }}>
            Project Manager
          </h2>

          <p className="css-u8ikco" style={{ color: "#5B6780" }}>
            Oversee the planning and execution of projects to ensure they’re
            successful
          </p>

          <h3 style={{ color: "#0F1114" }} className="mb-3">
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
            <div className="col-7 input-div2">Project Manager</div>

            <div className="col-3">
              <span>$102,800</span>
              <sup>**</sup>
            </div>
          </div>

          <div className="box3">
            <p className="">
              <span>
                Job openings:{" "}
                <strong>
                  <span>336,402</span>
                  <sup>**</sup>
                </strong>
              </span>
            </p>
            <p className="css-l3jxb6">
              <span>
                Projected 10 year growth:{" "}
                <strong>
                  <span>
                    +<span>11.1</span>
                  </span>
                  %<sup>***</sup>
                </strong>
              </span>
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7Ft9HzmpamG0aCN75HfACC/25f48cbbaa9a585689351cf97af573c8/adrienne_testimonial_image.jpg?auto=format%2Ccompress&amp;dpr=1&amp;h=136"
                alt=""
                style={{ maxWidth: "80px", maxHeight: "80px" }}
              />
            </div>

            <div className="col-9" style={{ color: "#5B6780" }}>
              <span>
                "Earning my Google Project Management: Professional Certificate
                is one of the biggest accomplishments I’ve made in my education,
                and it was a key stepping stone to my new career."
              </span>
              <div className="">– Adrienne</div>
            </div>
          </div>
        </div>
        <div className="col-6 pt-5">
          <h2 style={{ fontSize: "20px" }}>
            Recommended Professional Certificates{" "}
          </h2>

          <div className="row">
            <div className="col-6">
              <div className="card " style={{}}>
                <img
                  className="card-img-top"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/e1/58b36d811b4978a586b8f7c4ad94a2/Project-management-professional-certificate-SP-Logo.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div style={{ color: "5b6780", fontSize: "14px" }}>
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40"
                      alt=""
                    />
                    Microsoft
                  </div>
                  <h5 className="card-title pt-4" style={{ fontSize: "16px" }}>
                    Microsoft Product Manager
                  </h5>
                  <p className="card-text"></p>

                  <div>
                    4.6 <StarFilled style={{ color: "#0056d2" }} />{" "}
                    <span>(92 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{}}>
                <img
                  className="card-img-top"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/bf/b07da9bbe24cb8b0daa00010ff8b22/1060x596_GCC-photos_Ashley.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div style={{ color: "5b6780", fontSize: "14px" }}>
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40"
                      alt=""
                    />
                    Microsoft
                  </div>
                  <h5 className="card-title pt-4" style={{ fontSize: "16px" }}>
                    Microsoft Product Manager
                  </h5>
                  <p className="card-text"></p>

                  <div>
                    4.6 <StarFilled style={{ color: "#0056d2" }} />{" "}
                    <span>(92 reviews)</span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

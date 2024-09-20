import React from "react";
import sec1 from '../../Assests/sec1.png' 
import { ArrowRightOutlined } from "@ant-design/icons";

const Section1 = () => {
  return (
    <>
      <div className="container">
        <section className="sec1">
          <div className="row">
            <div
              className="col-12 col-md-6"
              style={{ padding: "26px 16px 16px 16px " }}
            >
              <h2
                style={{
                  fontSize: "64px",
                  lineHeight: "64px",
                  letterSpacing: "-1px",
                }}
              >
                New—learn how Google project managers use AI
              </h2>
              <p className="my-5" style={{ fontSize: "20px" }}>
                Build in-demand skills to start your new career—now with AI
                training to help you stay ahead of the curve.
              </p>

              <div className="row">
                <div className="col-12 col-md-6" style={{ width: "210px" }}>
                  <button
                    className="btn btn-primary"
                    style={{ padding: "12px 32px" }}
                  >
                    Enroll Today <ArrowRightOutlined />
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button
                    className="btn btn-outline-primary"
                    style={{ padding: "12px 32px" }}
                  >
                    Join for Free <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={sec1} alt="Section Image" className="img-fluid" />
            </div>
          </div>
        </section>

        {/* Small */}
        <section className="sec1-small mb-5">
          <div className="row">
            <div className="col-12">
              <img src={sec1} alt="Section Image" className="img-fluid" />
            </div>
            <div className="col-12">
              <h2
                className="text-center"
                style={{ fontSize: "36px", lineHeight: "36px", margin: "16px" }}
              >
                New—learn how Google project managers use AI
              </h2>
              <p
                className="my-5 text-center"
                style={{ fontSize: "20px", margin: "16px" }}
              >
                Build in-demand skills to start your new career—now with AI
                training to help you stay ahead of the curve.
              </p>

              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    style={{ padding: "12px 32px", width: "100%" }}
                  >
                    Enroll Today <ArrowRightOutlined />
                  </button>
                </div>
                <div className="col-12 mt-4">
                  <button
                    className="btn btn-outline-primary"
                    style={{ padding: "12px 32px", width: "100%" }}
                  >
                    Join for Free <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2 */}
      <section
        className="sec2"
        style={{ padding: "42px 0 62px 0", background: "rgb(245, 245, 245)" }}
      >
        <div className="container">
          <div className="row mb-5">
            <h2 className="text-center" style={{ fontSize: "28px" }}>
              We collaborate with{" "}
              <span className="underline" style={{ color: "#0056D2" }}>
                325+ leading universities and companies
              </span>
            </h2>
          </div>

          <div className="img-box">
            <a href="/partners/illinois" data-id="illinois" className="css-1cy3du">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/77hmeEJo3ZPlURCU02fD52/aa37b7f7b52285ba350acac62d8af5c1/illinois-3.png?auto=format%2Ccompress&amp;dpr=1&amp;h=32"
                style={{ maxHeight: "32px" }}
                alt="University of Illinois at Urbana-Champaign"
              />
            </a>
            <a href="/partners/duke" data-id="duke" className="css-1cy3du">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&amp;dpr=1&amp;h=32"
                style={{ maxHeight: "32px" }}
                alt="Duke University"
              />
            </a>
            <a href="/partners/google" data-id="google" className="css-1cy3du">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&amp;dpr=1&amp;h=37"
                style={{ maxHeight: "37px" }}
                alt="Google"
              />
            </a>
            <a href="/partners/umich" data-id="umich" className="css-1r6cd2t">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&amp;dpr=1&amp;h=55"
                style={{ maxHeight: "55px" }}
                alt="University of Michigan"
              />
            </a>
            <a href="/partners/ibm-skills-network" data-id="ibm-skills-network" className="css-1b3d6dt">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&amp;dpr=1&amp;h=37"
                style={{ maxHeight: "37px" }}
                alt="IBM"
              />
            </a>
            <a href="/partners/imperial" data-id="imperial" className="css-8cr5n">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FHOd44z40jTFsSSao84AM/d1e357f5650a23bf2936114112d44445/imperial.png?auto=format%2Ccompress&amp;dpr=1&amp;h=35"
                style={{ maxHeight: "35px" }}
                alt="Imperial College London"
              />
            </a>
            <a href="/partners/stanford" data-id="stanford" className="css-1ml6zsk">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&amp;dpr=1&amp;h=27"
                style={{ maxHeight: "27px" }}
                alt="Stanford University"
              />
            </a>
            <a href="/partners/penn" data-id="penn" className="css-8cr5n">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&amp;dpr=1&amp;h=37"
                style={{ maxHeight: "37px" }}
                alt="University of Pennsylvania"
              />
            </a>
          </div>

          <div className="img-box-small">
            <div className="row rowlin">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/77hmeEJo3ZPlURCU02fD52/aa37b7f7b52285ba350acac62d8af5c1/illinois-3.png?auto=format%2Ccompress&amp;dpr=1&amp;h=32"
                style={{ height: "13px" }}
                alt="University of Illinois at Urbana-Champaign"
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&h=32"
                alt="Duke University"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&h=37"
                alt="Google"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&h=55"
                alt="University of Michigan"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&h=37"
                alt="IBM"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FHOd44z40jTFsSSao84AM/d1e357f5650a23bf2936114112d44445/imperial.png?auto=format%2Ccompress&dpr=2&h=35"
                alt="Imperial College London"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&h=27"
                alt="Stanford University"
                style={{ height: "30px" }}
              />
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&h=37"
                alt="University of Pennsylvania"
                style={{ height: "30px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;

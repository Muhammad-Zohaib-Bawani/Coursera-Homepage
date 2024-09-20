import React from "react";
import {img1, img5,img6,img7, ibm, google } from "../../Assests/assests";
import Card from "./card";
import {
    SafetyCertificateTwoTone,
    ArrowRightOutlined,
  } from "@ant-design/icons";


export default function Section4() {
    return (
      <div className="container">
        <div className="row p-4 mt-4" style={{background:"#E4EEFF", borderRadius:"30px"}}>
            <div className="col-md-2 col-12 cardComponent">
                <h2 style={{color:"#of1114"}}>
                Popular certificates, new AI skills
                </h2>
                <p>
                Get job-ready with Google Professional Certificates—now including AI skills.
                </p>
                <button className=" btn btn-primary card-cards">
                    View all    <ArrowRightOutlined/>
                </button>
            </div>
            <div className="col-md-3 col-12 cardComponent"  >  <Card img={img5} logo={google} title="Google" heading="Google CyberSecurity" /></div>  
          <div className="col-md-3 col-12 cardComponent"   >  <Card img={img6} logo={google} title="Google" heading="Google Digital Marketing" /></div>
            <div className="col-md-3 col-12 cardComponent"  >  <Card img={img7} logo={google} title="Google" heading="Google UX Designer" />                                                                                                </div>

            <button className=" btn btn-primary tabs-small mt-4" style={{width: "    150px"}}>
                    View all    <ArrowRightOutlined/>
                </button>
        </div>
      

       
      </div>
    );
  }
  
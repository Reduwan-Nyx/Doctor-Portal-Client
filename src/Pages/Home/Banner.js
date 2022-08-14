import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1
            className="text-5xl font-
Open Sans"
          >
            {" "}
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6 font-Open Sans ">
            {" "}
            The Doctor’s Portal provides health organizations that strive for
            excellence and quality care, with a tool that allows physicians to
            measure themselves against key performance indicators set by the
            organization. This tool helps optimize physician practices in
            compliance with the organization’s guidelines, offering valuable
            statistics.
          </p>
          <PrimaryButton><Link to="/appointment">Get Started</Link></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

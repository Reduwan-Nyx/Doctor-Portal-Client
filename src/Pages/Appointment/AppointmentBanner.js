import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";
import "./AppointmentBanner.css";
import back from "../../assets/images/cool-background.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${back})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

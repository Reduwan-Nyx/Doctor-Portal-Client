import React from "react";

const InfoCard = ({img, cardTitle, bgClass}) => {
  return (
    <div className={`card lg:card-side  shadow-xl ${bgClass}`}>
      <figure className="pl-5 pt-5 ">
        <img  className="w-10" src={img} alt="Album" />
      </figure>
      <div class="card-body text-white text-center">
        <h2 class="text-center text-2xl">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;

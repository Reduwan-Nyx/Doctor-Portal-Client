import React from "react";

const Service = ({ service }) => {
    const {name, slots} = service
  return (
    <div class="card lg:max-w-lg  shadow-xl ">
      <div class="card-body text-center">
        <h2 class="text-center uppercase font-bold text-xl font-mono">{name}</h2>
        <p className="font-mono">{
            slots.length > 0 ? <span>{slots[0]}</span>
            : <span className="text-red-500">Try Another Date</span>
            }</p>
        <p className="font-mono">{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <div class="card-actions justify-center">
          <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase font-mono">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

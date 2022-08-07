import React from "react";
import { format } from "date-fns";
const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;



  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null)
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary font-mono text-center">
            Booking For: {name}
          </h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center my-5">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <select name="slot" class="select select-info w-full max-w-xs">
             {
              slots.map(slot => <option value={slot}>{slot}</option>)
             }
            </select>
            <input
              type="text" name="name"
              placeholder="Your Name"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email" name="email"
              placeholder="Email Address"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text" name="phone"
              placeholder="Phone Number"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-outline btn-primary w-full max-w-xs "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;

  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    const formattedDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://agile-depths-16235.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `You Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary font-mono text-center">
            Booking For: {name}
          </h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center my-5"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <select name="slot" className="select select-info w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-outline btn-primary w-full max-w-xs "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

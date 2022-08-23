import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3jXvAtYTMGS6J9JCv8qQPWBynz5hDjaqdtZpesEd7KAILhk00Rjj8TylM9facNoLnKv4bCSWSFf8nZzDrDvsyR00scjiVkKn"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://agile-depths-16235.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="font-bold text-blue-500">
            Hello, {appointment.patientName}
          </h2>
          <h2 class="card-title">Please Pay For {appointment.treatment}</h2>
          <p>
            Your Appointment{" "}
            <span className="text-orange-700">
              {appointment.date} at {appointment.slot}
            </span>
          </p>
          <p>Please Pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

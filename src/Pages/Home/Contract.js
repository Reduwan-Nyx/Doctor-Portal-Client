import React from 'react';
import background from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contract = () => {
    return (
        <section  style={{
            background: `url(${background})`,
            height: "400px",
          }}>
             <div className="text-center">
        <h5 className="text-primary mt-4">Contact Us</h5>
        <h2 className="text-white ">Stay connected with us</h2>
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-xs mt-5"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-xs mt-5"
        />
        <br />
        <textarea
          className="textarea w-full max-w-xs mt-5"
          placeholder="Your Message"
        ></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
            
        </section>
    );
};

export default Contract;
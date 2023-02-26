import React from "react";

const ThankYou = ({ selectedRating }) => {
  return (
    <div className="panel center">
      <img className="img" src="/illustration-thank-you.svg" alt="thank you for rating" />
      <span className="selection">You selected {selectedRating} out of 5</span>
      <h2 className="title">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>
    </div>
  );
};

export default ThankYou;

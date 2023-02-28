import React from "react";
import img from "../../public/illustration-thank-you.svg";

export default function ThankYou({ selectedRating }) {
  return (
    <div className="px-6 py-8 w-full max-w-[23rem] flex flex-col items-center justify-around gap-4 rounded-3xl bg-gradient-to-b from-dark_blue to-gray-900 text-center">
      <img className="w-[10em] h-[6em] self-center" src={img} alt="thank you for rating" />
      <span className="px-4 py-1 text-[0.88rem] rounded-full bg-dark_blue text-orange">
        You selected {selectedRating} out of 5
      </span>
      <div className="space-y-2">
        <h2 className="text-[1.6rem] text-white">Thank you!</h2>
        <p className="text-[0.88rem] text-light_grey leading-6">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
      </div>
    </div>
  );
}

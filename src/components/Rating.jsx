import React from "react";
import iconStar from "/icon-star.svg";

export default function Rating({ selectedRating, setSelectedRating, setIsSubmitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      action=""
      className="px-6 py-8 w-full max-w-[23rem] flex flex-col justify-around gap-6 rounded-3xl bg-gradient-to-b from-dark_blue to-gray-900"
      onSubmit={handleSubmit}>
      <img src={iconStar} alt="star icon" className="p-4 self-start rounded-full bg-dark_blue shadow-sm" />
      <div className="space-y-2">
        <h2 className="text-[1.6rem] text-white">How did we do?</h2>
        <p className="text-[0.88rem] text-light_grey leading-6">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>
      </div>
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => setSelectedRating(rating)}
            className="flex items-center justify-center w-[3em] h-[3em] rounded-full bg-dark_blue text-light_grey hover:bg-medium_grey hover:text-white focus:bg-orange focus:text-white transition-color duration-200">
            {rating}
          </button>
        ))}
      </div>
      <button
        type="submit"
        disabled={!selectedRating}
        className="py-2 rounded-3xl bg-orange text-white hover:bg-white hover:text-orange disabled:text-dark_blue disabled:cursor-not-allowed text-[.8rem] uppercase tracking-wider transition-color duration-200 disabled:bg-medium_grey disabled:hover:bg-medium_grey">
        submit
      </button>
    </form>
  );
}

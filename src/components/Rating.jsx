import React from "react";

const Rating = ({ selectedRating, setSelectedRating, setIsSubmitted }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form action="" className="panel" onSubmit={handleSubmit}>
      <img src="/icon-star.svg" alt="star icon" className="star" />
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <div className="btn_group">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button key={rating} type="button" onClick={() => setSelectedRating(rating)} className="btn">
            {rating}
          </button>
        ))}
      </div>
      <button type="submit" disabled={!selectedRating} className="submit">
        submit
      </button>
    </form>
  );
};

export default Rating;

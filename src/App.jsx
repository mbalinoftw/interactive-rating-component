import React, { useState } from "react";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="section">
      {isSubmitted ? (
        <ThankYou selectedRating={selectedRating} />
      ) : (
        <Rating selectedRating={selectedRating} setSelectedRating={setSelectedRating} setIsSubmitted={setIsSubmitted} />
      )}
      <Attribution />
    </section>
  );
};

export default App;

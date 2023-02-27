import React, { useState } from "react";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="min-h-screen grid place-items-center bg-very_dark_blue">
      {isSubmitted ? (
        <ThankYou selectedRating={selectedRating} />
      ) : (
        <Rating selectedRating={selectedRating} setSelectedRating={setSelectedRating} setIsSubmitted={setIsSubmitted} />
      )}
      <Attribution />
    </main>
  );
}

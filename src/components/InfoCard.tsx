import React, { useState } from "react";
import "../styles/InfoCard.css";
import type { InfoCardProps } from "../interfaces/";

const InfoCard: React.FC<InfoCardProps> = ({ text, backText, link }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`info-card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      {/* Front of the card */}
      <div className="info-card-front">
        <p>{text}</p>
      </div>

      {/* Back of the card */}
      <div className="info-card-back">
        <p className="info-description">{backText}</p>
        <div className="info-button-container">
          <a href={link} className="info-button" target="_blank">
            Go to page
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

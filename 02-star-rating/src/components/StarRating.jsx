import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maximumStars, filledStars }) => {
  const [filledStarCount, setFilledStarCount] = useState(filledStars);
  const [hoverIndex, setHoveredIndex] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: maximumStars }, (_, index) => (
        <div
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(0)}
          onClick={() => setFilledStarCount(index + 1)}
        >
          <Star
            filled={hoverIndex ? hoverIndex >= index : filledStarCount > index}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;

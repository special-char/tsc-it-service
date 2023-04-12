import React from "react";
// import styles from "./rev.module.css";
import StarFull from "public/icons/starfill.svg";
import Star from "public/icons/star.svg";
import StarHalf from "public/icons/starhalf.svg";

const Reviews = ({ rate, width, height }) => {
  const start = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1">
      {start.map((i) => {
        if (rate >= i) {
          return (
            <StarFull
              key={i}
              width={width}
              height={height}
              fill="grey"
              className="reviews__svg "
            />
          );
        }
        if (i - 0.5 === rate) {
          return (
            <StarHalf
              key={i}
              width={width}
              height={height}
              fill="grey"
              className="reviews__svg"
            />
          );
        }
        return <Star key={i} width={width} height={height} className="" />;
      })}
    </div>
  );
};

export default Reviews;

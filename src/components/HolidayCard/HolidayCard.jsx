import React from "react";
import "./HolidayCard.scss";
import Logo from "../Logo/Logo";
import Location from "../../assets/images/location.png";

const HolidayCard = ({ holiday }) => {
  const {
    place,
    image,
    date: { arrival },
  } = holiday;

  const arrivalDate = arrival.split("T")[0];

  return (
    <div className="holiday-card">
      <div className="holiday-card__text-wrap">
        <Logo />
        <div className="holiday-card__text-wrap--header">
          <h4>
            <img className="location" src={Location} alt="location pin" />
            {place}
          </h4>
          <p>{arrivalDate}</p>
        </div>
      </div>

      <img className="holiday-card__image" src={image} alt="holiday's image" />
    </div>
  );
};

export default HolidayCard;

import React from "react";
import "./HolidayCard.scss";
import Logo from "../Logo/Logo";
import Location from "../../assets/images/location.png";

const HolidayCard = ({ holiday }) => {
  const { place, image, date } = holiday;

  const cleanedDate = date.split("T")[0];

  return (
    <div className="holiday-card">
      <div className="holiday-card__text-wrap">
        <Logo />
        <div className="holiday-card__text-wrap--header">
          <h4>
            <img className="location" src={Location} alt="location pin" />
            {place}
          </h4>
          <p>{cleanedDate}</p>
        </div>
      </div>

      <img className="holiday-card__img" src={image} alt="holiday's pic" />
    </div>
  );
};

export default HolidayCard;

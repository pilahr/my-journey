import React from "react";
import "./HolidayCard.scss";
import Logo from "../Logo/Logo";
import Location from "../../assets/images/location.png";

const HolidayCard = () => {
  return (
    <div className="holiday-card">
      <div className="holiday-card__text-wrap">
        <Logo />
        <div className="holiday-card__text-wrap--header">
          <h4>
            <img className="location" src={Location} alt="location pin" />
            {}
          </h4>
          <p>date</p>
        </div>
      </div>

      <img className="holiday-card__image" src="" alt="" />
    </div>
  );
};

export default HolidayCard;

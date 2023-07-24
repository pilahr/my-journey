import React from "react";
import "./HolidayByIdCard.scss";
import Logo from "../Logo/Logo";
import Location from "../../assets/images/location.png";

const HolidayByIdCard = ({ holiday }) => {
  const { place, image, date, text } = holiday;

  //   const arrivalDate = date.arrival.split("T")[0];
  //   const departureDate = date.departure.split("T")[0];

  return (
    <div className="holidayByIdCard">
      <div className="holidayByIdCard__wrap">
        <Logo />
        <div className="holidayByIdCard__wrap--header">
          <h4 className="holidayByIdCard-header">
            <img className="location" src={Location} alt="location pin" />
            {place}
          </h4>
          <p className="holidayByIdCard-date">
            {/* {arrivalDate} to {departureDate} */}
          </p>
        </div>
      </div>

      <div className="holidayByIdCard__img-text-wrap">
        <img src={image} alt="holiday pic" className="holidayByIdCard__img-text-wrap--img" />
        <div className="holidayByIdCard__img-text-wrap--text">
          <p className="description">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayByIdCard;

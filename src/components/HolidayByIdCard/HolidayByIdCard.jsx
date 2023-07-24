import React from "react";
import "./HolidayByIdCard.scss";
import Logo from "../Logo/Logo";
import Location from "../../assets/images/location.png";
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import { Link } from "react-router-dom";

const HolidayByIdCard = ({ holiday, handleDelete }) => {
  const { place, image, date, text, _id } = holiday;

  return (
    <div className="holidayByIdCard">
      <div className="holidayByIdCard__wrap">
        <Logo />

        <div className="holidayByIdCard__wrap--header">
          <div className="top-wrap">
            <div className="location-icon-with-text">
              <img className="location" src={Location} alt="location pin" />
              <h4>{place} </h4>
            </div>

            <div className="icons">
              <Link to={`/holiday/edit/${_id}`}>
                <img src={Edit} alt="edit icon" className="edit-icon" />
              </Link>

              <img
                src={Delete}
                alt="delete icon"
                className="delete-icon"
                onClick={handleDelete}
              />
            </div>
          </div>

          <p className="holidayByIdCard-date">{date}</p>
        </div>
      </div>

      <div className="holidayByIdCard__img-text-wrap">
        <img
          src={image}
          alt="holiday pic"
          className="holidayByIdCard__img-text-wrap--img"
        />
        <div className="holidayByIdCard__img-text-wrap--text">
          <p className="description">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayByIdCard;

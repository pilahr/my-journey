import React from "react";
import "./HolidaysContainer.scss";
import HolidayCard from "../../components/HolidayCard/HolidayCard";

const HolidaysContainer = ({ holidays }) => {
  return (
    <>
      {holidays.map((holiday, index) => (
        <div className="holidays-container" key={index}>
          <HolidayCard holiday={holiday} key={index} className="holidays-container__cards"/>
        </div>
      ))}
    </>
  );
};

export default HolidaysContainer;

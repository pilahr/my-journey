import React from "react";
import "./HolidaysContainer.scss";
import HolidayCard from "../../components/HolidayCard/HolidayCard";

const HolidaysContainer = ({ holidaysData }) => {
  return (
    <div className="holidays-container">

        <HolidayCard />

    </div>
  );
};

export default HolidaysContainer;

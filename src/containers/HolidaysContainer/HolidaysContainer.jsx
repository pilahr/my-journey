import React from "react";
import "./HolidaysContainer.scss";
import HolidayCard from "../../components/HolidayCard/HolidayCard";
import { Link } from "react-router-dom";

const HolidaysContainer = ({ holidays }) => {
  const holidaysSortedByDate = holidays.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      {holidaysSortedByDate.map((holiday, index) => (
        <Link key={index} to={`/holiday/${holiday._id}`}>
          <div className="holidays-container" key={index}>
            <HolidayCard
              holiday={holiday}
              key={index}
              className="holidays-container__cards"
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default HolidaysContainer;

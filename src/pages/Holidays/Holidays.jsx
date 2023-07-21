import React from "react";
import "./Holidays.scss";
import Header from "../../components/Header/Header";
import HolidaysContainer from "../../containers/HolidaysContainer/HolidaysContainer";

const Holidays = ({ holidays }) => {

  return (
    <div className="holidays-page">
      <div>
        <Header />
      </div>
      <div className="holidays-page__cards">
        <HolidaysContainer holidays={holidays} />
      </div>
    </div>
  );
};

export default Holidays;

import React, { useEffect, useState } from "react";
import "./HolidayById.scss";
import Header from "../../components/Header/Header";
import HolidayByIdCard from "../../components/HolidayByIdCard/HolidayByIdCard";
import { useNavigate, useParams } from "react-router-dom";

const HolidayById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [holiday, setHoliday] = useState("");

  const getHolidayById = async (id) => {
    // const url = `http://localhost:8080/holidays/${id}`;
    const url = `https://my-journey-new-backend.vercel.app/holidays/${id}`;
    const response = await fetch(url);
    const holidayData = await response.json();
    setHoliday(holidayData);
  };

  useEffect(() => {
    getHolidayById(id);
  }, [id]);

  const handleDelete = async () => {
    // const url = `http://localhost:8080/holidays/${id}`;
    const result = await fetch(`https://my-journey-new-backend.vercel.app/holidays/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Blog deleted");
      navigate("/holidays");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <div className="holidayById-page">
      <div className="holidayById-page__header">
        <Header />
      </div>

      <div className="holidayById-page__card">
        <HolidayByIdCard holiday={holiday} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default HolidayById;

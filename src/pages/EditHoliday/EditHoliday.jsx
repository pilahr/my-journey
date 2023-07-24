import React, { useState, useEffect } from "react";
import "./EditHoliday.scss";
import Header from "../../components/Header/Header";
import EditForm from "../../components/Form/EditForm/EditForm";
import { useParams, useNavigate } from "react-router-dom";

const EditHoliday = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [holiday, setHoliday] = useState("");

  const getHolidayById = async (id) => {
    const url = `http://localhost:8080/holidays/${id}`;
    const response = await fetch(url);
    const holidayData = await response.json();
    setHoliday(holidayData);
  };

  const handleUpdate = async (updatedHoliday) => {
    const result = await fetch(`http://localhost:8080/holidays/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedHoliday),
    });

    if (result.ok) {
      alert("Blog updated");
      const updated = await result.json();
      setHoliday(updated);
      navigate(`/holiday/${id}`);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  useEffect(() => {
    getHolidayById(id);
  }, []);

  return (
    <div className="editHoliday">
      <div>
        <Header />
      </div>
      <div className="editHoliday__editForm">
        <EditForm handleUpdate={handleUpdate} holiday={holiday} />
      </div>
    </div>
  );
};

export default EditHoliday;

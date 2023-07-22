import React from "react";
import "./AddHoliday";
import Header from "../../components/Header/Header";
import CreateForm from "../../components/Form/CreateForm/CreateForm";
import { useNavigate } from "react-router-dom";

const AddHoliday = ({ holidays }) => {
  const navigate = useNavigate();

  const handleSubmit = async (holidays) => {
    const result = await fetch("http://localhost:8080/holidays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holidays),
    });

    if (result.ok) {
      alert("Content added");
      const holidays = await result.json();
      navigate("/holidays/" + holidays._id, { state: holidays });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    place: "",
    arrival: "",
    departure: "",
    image: "",
    text: "",
  };

  return (
    <div className="add-holiday">
      <div className="add-holiday__header">
        <Header />
      </div>
      <div >
        <CreateForm className="add-holiday__form" holidays={holidays} handleSubmit={handleSubmit} defaultFormState={defaultFormState}/>
      </div>
    </div>
  );
};

export default AddHoliday;

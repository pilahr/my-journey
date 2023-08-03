import React from "react";
import "./AddHoliday.scss";
import Header from "../../components/Header/Header";
import CreateForm from "../../components/Form/CreateForm/CreateForm";
import { useNavigate } from "react-router-dom";

const AddHoliday = ({ holidays }) => {
  const navigate = useNavigate();


  const handleSubmit = async (holidays) => {
    const result = await fetch("https://my-journey-new-backend.vercel.app/holidays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holidays),
    });

    if (result.ok) {
      alert("Content added");
      const holidays = await result.json();
      navigate("/holiday/" + holidays._id);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    place: "",
    date: new Date(),
    image: "",
    text: "",
  };

  return (
    <div className="add-holiday">
      <div className="add-holiday__header">
        <Header />
      </div>
      <div className="add-holiday__form">
        <CreateForm
          holidays={holidays}
          handleSubmit={handleSubmit}
          defaultFormState={defaultFormState}
        />
      </div>
    </div>
  );
};

export default AddHoliday;

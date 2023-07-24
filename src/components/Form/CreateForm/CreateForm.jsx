import React, { useState } from "react";
import "./CreateForm.scss";
import Button from "../../Button/Button";

const CreateForm = ({ holidays, handleSubmit, defaultFormState }) => {
  const [holidayData, setHolidayData] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    handleSubmit(holidayData);
  };
  return (
    <div className="create-form-container">
      <h2 className="create-form-container__title">Add To Blog..</h2>
      <form className="create-form-container__form" onSubmit={handleValidation}>
        <label className="create-form-container__form--label">Place</label>
        <input
          className="create-form-container__form--input"
          placeholder="Place"
          type="text"
          value={holidays.place}
          onInput={(event) =>
            setHolidayData({ ...holidayData, place: event.target.value })
          }
        />
        <label className="create-form-container__form--label">Date</label>
        <input
          className="create-form-container__form--input"
          placeholder="YYYY-MM-DD"
          type="text"
          value={holidays.date}
          onInput={(event) =>
            setHolidayData({ ...holidayData, date: event.target.value })
          }
        />
        <label className="create-form-container__form--label">Image URL</label>
        <input
          className="create-form-container__form--input"
          placeholder="http://www.example-image.jpeg"
          type="text"
          value={holidays.image}
          onInput={(event) =>
            setHolidayData({ ...holidayData, image: event.target.value })
          }
        />
        <label className="create-form-container__form--label">
          Description
        </label>
        <input
          className="create-form-container__form--input"
          placeholder="How's the trip?"
          type="text"
          value={holidays.text}
          onInput={(event) =>
            setHolidayData({ ...holidayData, text: event.target.value })
          }
        />

        <div className="create-form-container__form--button">
          <Button buttonText="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;

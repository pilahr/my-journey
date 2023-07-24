import React, { useState } from "react";
import "./EditForm.scss";
import Button from "../../Button/Button";

const EditForm = ({ handleUpdate, holiday }) => {
  const [holidayData, setHolidayData] = useState(holiday);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(holidayData).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleUpdate(holidayData);
  };

  return (
    <div className="edit-form-container">
      <h2 className="edit-form-container__title">Edit the blog...</h2>
      <form className="edit-form-container__form" onSubmit={handleValidation}>
        <label className="edit-form-container__form--label">Place</label>
        <input
          className="edit-form-container__form--input"
          placeholder="Place"
          type="text"
          defaultValue={holiday.place}
          onChange={(event) =>
            setHolidayData({ ...holidayData, place: event.target.value })
          }
        />
        <label className="edit-form-container__form--label">
          Date Of Arrival
        </label>
        <input
          className="edit-form-container__form--input"
          placeholder="Add arrival date yyyy-mm-dd"
          type="text"
          defaultValue={holiday.date}
          onChange={(event) =>
            setHolidayData({ ...holidayData, holidays: event.target.value })
          }
        />
        <label className="edit-form-container__form--label">Image URL</label>
        <input
          className="edit-form-container__form--input"
          placeholder="http://www.image.jpeg"
          type="text"
          defaultValue={holiday.image}
          onChange={(event) =>
            setHolidayData({ ...holidayData, image: event.target.value })
          }
        />
        <label className="edit-form-container__form--label">Description</label>
        <input
          className="edit-form-container__form--input"
          placeholder="How's the trip"
          type="text"
          defaultValue={holiday.text}
          onChange={(event) =>
            setHolidayData({ ...holidayData, text: event.target.value })
          }
        />

        <div className="edit-form-container__form--button">
          <Button buttonText="Update" onClick={handleUpdate} />
        </div>
      </form>
    </div>
  );
};

export default EditForm;

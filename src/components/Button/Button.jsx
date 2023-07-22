import React from "react";
import "./Button.scss";

const Button = ({ buttonText, onClick }) => {


  return (
    <div>
      <button className="btn" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

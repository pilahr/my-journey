import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Holidays from "./pages/Holidays/Holidays";
import HolidayById from "./pages/HolidayById/HolidayById";
import AddHoliday from "./pages/AddHoliday/AddHoliday";
import EditHoliday from "./pages/EditHoliday/EditHoliday";

const App = () => {
  const [user, setUser] = useState();
  const [holidays, setHolidays] = useState([]);

  const getHolidays = async () => {
    // let url = "http://localhost:8080/holidays";

    let url = "https://my-journey-new-backend.vercel.app/holidays";
    const res = await fetch(url);
    const holidayData = await res.json();

    setHolidays(holidayData);
  };

  useEffect(() => {
    getHolidays();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>

        {user && (
          <Routes>
            <Route
              path="/holidays"
              element={<Holidays holidays={holidays} />}
            />
            <Route path="/holiday/:id" element={<HolidayById />} />
            <Route
              path="/holiday/add"
              element={<AddHoliday holidays={holidays} />}
            />
            <Route path="/holiday/edit/:id" element={<EditHoliday />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;

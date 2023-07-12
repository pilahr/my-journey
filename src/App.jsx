import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Holidays from "./pages/Holidays/Holidays";
import HolidayById from "./pages/HolidayById/HolidayById";
import AddHoliday from "./pages/AddHoliday/AddHoliday";
import EditHoliday from "./pages/EditHoliday/EditHoliday";

const App = () => {
  // const [user, setUser] = useState();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        {user && (
          <Routes>
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/holiday/:id" element={<HolidayById />} />
            <Route path="/holiday/add" element={<AddHoliday />} />
            <Route path="/holiday/edit/:id" element={<EditHoliday />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Email from "./components/Email/Email";
import Trips from "./components/Trips/Trips";
import Drivers from "./components/Drivers/Drivers";
import Vehicles from "./components/Vehicles/Vehicles";
import ScheduleTrip from "./components/ScheduleTrip/ScheduleTrip";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/email" element={<Email />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/schedule-trip" element={<ScheduleTrip />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

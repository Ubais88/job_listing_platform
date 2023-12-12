import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/jobdetail" element={<JobDetails />} />
      </Routes>
    </div>
  );
};

export default App;

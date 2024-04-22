import React, { useState } from "react";
import Arrow from "./assets/images/vector.svg";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Auth/HomePage/HomePage";
import SingleStudent from "./pages/Auth/SingleStudent/SingleStudent";
import Dashboard from "./pages/Auth/Dashboard/Dashboard";
import Students from "./pages/Auth/Students/Students";
import Billing from "./pages/Auth/Billing/Billing";
import Exams from "./pages/Auth/Exams/Exams";
import Settingsandprofile from "./pages/Auth/Settingsandprofile/Settingsandprofile";
import AddStudent from "./pages/Auth/AddStudent/AddStudent";
import Features from "./pages/Auth/Features/Features";
import Logo from "./assets/images/logo.svg";
import Navbar from "./components/Navbar/navbar";

function Authentication() {
  const [student, setStudents] = useState(
    JSON.parse(window.localStorage.getItem("student")) || []
  );
 
  return (
    <div className="flex">
      <div className=" pt-[26px] bg-[#152259] h-[100vh]  w-[14%] flex flex-col items-center">
        <img src={Logo} alt="Site logo" width={65} height={65} />
        <a className="AdminLink" href="#">
          UdemyInter.school
        </a>
        <span className="AdminLine"></span>
        <Navbar />
      </div>

      <div className="w-[86%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/teachers"
            element={<HomePage student={student} setStudents={setStudents} />}
          />
          <Route
            path="/add"
            element={<AddStudent setStudents={setStudents} student={student} />}
          />
          <Route
            path="/student/:id"
            element={<SingleStudent student={student} />}
          />
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settingsandprofile" element={<Settingsandprofile />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/features" element={<Features />} />
          Features
        </Routes>
      </div>
    </div>
  );
}

export default Authentication;

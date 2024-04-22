import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import trashIcon from "../../../assets/images/trash.svg";
import infoIcon from "../../../assets/images/info.svg";
import Bell from "../../../assets/images/bell.svg";
import Search from "../../../assets/images/search.svg";
import teachersHeroImg from "../../../assets/images/teachersHeroImg.png";
import support1 from "../../../assets/images/Support1.svg";
import support2 from "../../../assets/images/Support2.svg";

function HomePage({ student, setStudents,}) {
  const navigate = useNavigate();
  const handleDeletestudent = (e) => {
    const clickedId = e.target.id;
    const findedStudent = student.findIndex((item) => item.id == clickedId);
    student.splice(findedStudent, 1);
    toast.success("Student deleted");
    setStudents([...student]);
  };
  const HandleSearchInp = (e) => {
    const studentData = JSON.parse(localStorage.getItem("student"));
    const filteredData = studentData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()))
    setStudents(filteredData);
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header className="pt-[29px] pl-[124px] flex  items-center justify-end pr-[69px]">
        <img
          className="mr-[48px]"
          src={Bell}
          alt="Notifications"
          width={28}
          height={28}
        />
        <button className="DashboardGeaderBtn2">Log out</button>
      </header>
      <div className="flex items-end justify-between mb-[21px] pl-[38px] pr-[104px]">
        <h3 className="text-[#4F4F4F] text-[20px] font-medium">Teachers</h3>
        <div className="flex flex-col space-y-[14px]">
          <Link
            to={"/add"}
            className="text-[14] inline-block text-center font-semibold text-white bg-[#509CDB] rounded-[6px] py-[12px] w-[130px] hover:opacity-60 transition-[0.3s]"
          >
            Add Teachers
          </Link>
        </div>
      </div>
      <div className="relative pl-[38px] pr-[104px]">
        <label>
          <input onChange={HandleSearchInp}
            className="w-full pl-[48px] py-[16px] pr-10 bg-[#FCFAFA] border-transparent border-[1px] rounded-md outline-none  focus:shadow-md"
            type="text"
            placeholder="Search for a student by name or email"
          />
          <img
            className="absolute left-[50px] top-[20px]"
            src={Search}
            alt="search icon"
            width={16}
            height={16}
          />
        </label>
      </div>
      <div className="p-5 ">
      {student.length ? <table className="w-full">
          <thead>
            <tr>
              <th className="ThStyle p-2">ID</th>
              <th className="ThStyle p-2">User Img</th>
              <th className="ThStyle p-2">Name</th>
              <th className="ThStyle p-2">Subject</th>
              <th className="ThStyle p-2">Class</th>
              <th className="ThStyle p-2">Email</th>
              <th className="ThStyle p-2">Created At</th>
              <th className="ThStyle p-2">Gender</th>
              <th className="ThStyle p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((item) => (
            <tr className="even:bg-[#EBF6FF80]" key={item.id}>
              <td className="p-2 text-center">{item.id}</td>
              <td className="p-2 flex justify-center">
                <div className="rounded-[50%] overflow-hidden w-[60px] h-[60px]">

                <img 
                className=""
                  src={item.avatarImg}
                  alt="Student Img"
                  width={70}
                  height={70}
                />
                </div>
              </td>
              <td className="TrStyle p-2 text-center">{item.name}</td>
              <td className="TrStyle p-2 text-center">{item.subject}</td>
              <td className="TrStyle p-2 text-center">
              {item.gruopID == "1" ? "React-N2" : ""}
                  {item.gruopID == "2" ? "React-N3" : ""}
                  {item.gruopID == "3" ? "React-N4" : ""}
                  {item.gruopID == "4" ? "React-N5" : ""}
              </td>
              <td className="TrStyle p-2 text-center">{item.email}</td>
              <td className="TrStyle p-2 text-center">{item.createdAt}</td>
              <td className="TrStyle p-2 text-center">{item.gender}</td>
              <td className="TrStyle p-2 text-center">
                <button id={item.id} onClick={handleDeletestudent}>
                  <img src={trashIcon} />
                </button>
                <button
                  className="ml-[10px]"
                  onClick={() => navigate(`/student/${item.id}`)}
                >
                  <img src={infoIcon} />
                </button>
              </td>
            </tr>
            )) }
          </tbody>
        </table> : (
              <div className="relative text-center pt-[14px] bg-white mt-[30px]  pb-[50px]">
                <img
                  className="mx-auto mb-3"
                  src={teachersHeroImg}
                  alt="img"
                  width={340}
                  height={255}
                />
                <h4 className="text-[28px] text-[#4F4F4F] font-semibold my-[5px]">
                  No Teachers at this time
                </h4>
                <p className="text-[14px] text-[#4F4F4F] font-medium">
                  Teachers will appear here after they enroll in your school.{" "}
                </p>
                <button className="SupportBtn py-[16px] absolute right-[35px] bottom-[-4px] hover:opacity-60  shadow-xl">
                  <img
                    className="mr-[8px]"
                    src={support1}
                    width={16}
                    height={16}
                  />
                  <span className="text-[16px] font-semibold text-[#FCFAFA]">
                    Support
                  </span>

                  <img
                    className="ml-[39px]"
                    src={support2}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            )}  
      </div>
    </>
  );
}

export default HomePage;

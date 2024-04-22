import React from "react";
import { useParams } from "react-router-dom";
import Bell from "../../../assets/images/bell.svg";
import Education from "../../../assets/images/Education.svg";
import Mail from "../../../assets/images/Mail.svg";
import Tel from "../../../assets/images/Tel.svg";

function SingleStudent({ student }) {
  const { id } = useParams();
  const singleData = student.find((item) => item.id == id);
  console.log(singleData);
  console.log(id);
  return (
    <>
      <header className="pt-[29px] pl-[124px] flex items-center justify-end pr-[200px]">
        <img
          className="mr-[48px]"
          src={Bell}
          alt="Notifications"
          width={28}
          height={28}
        />
        <button className="DashboardGeaderBtn2">Log out</button>
      </header>
      <div className=" flex justify-start mt-[50px] space-x-[350px] ml-[300px]">
        <div className="flex flex-col space-y-[50px] mt-[66px]">
          <div className=" w-[280px] h-[280px] rounded-[50%] overflow-hidden">
            <img src={singleData.avatarImg} width={280} height={280} />
          </div>
          <div className=" flex flex-col items-center justify-center space-y-[10px]">
            <p className="SingleName">{singleData.name}</p>
            <p className="SingleSubject">{singleData.subject}</p>
          </div>
          <div className=" flex items-center justify-center space-x-[25px]">
            <a href="#">
              <img src={Education} width={60} height={60} />
            </a>
            <a href="#">
              <img src={Tel} width={60} height={60} />
            </a>
            <a href={`mailto:${singleData.email}`}>
              <img src={Mail} width={60} height={60} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="AboutStyle mt-[100px]">About</p>
          <p className="AboutStyleContent   text-start">{singleData.about}</p>
          <div className=" flex items-center justify-center space-x-[142px] mt-[30px]">
            <div>
              <p className="AboutStyle">Age</p>
              <p className="AboutStyleContent">{singleData.age}</p>
            </div>
            <div>
              <p className="AboutStyle">Gender</p>
              <p className="AboutStyleContent">{singleData.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleStudent;

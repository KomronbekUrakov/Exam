import React from "react";
import Bell from "../../../assets/images/bell.svg";
import addStudent from "../../../assets/images/AddStudent.svg";
import addAdmins from "../../../assets/images/AddAdmin.svg";
import addClass from "../../../assets/images/AddClass.svg";
import support1 from "../../../assets/images/Support1.svg";
import support2 from "../../../assets/images/Support2.svg";

function Dashboard() {
  return (
    <>
      <header className="pt-[29px] pl-[124px] flex  items-center">
        <p className="flex flex-col mr-[168px] dashBoadrdText">
          Learn how to launch faster{" "}
          <span className="dashBoadrdText2">
            watch our webinar for tips from our experts and get a limited time
            offer.
          </span>
        </p>
        <img
          className="mr-[48px]"
          src={Bell}
          alt="Notifications"
          width={28}
          height={28}
        />
        <button  className="DashboardGeaderBtn">Log out</button>
      </header>
      <div className="">
        <h2 className="dashboardTitle">
          Welcome to your dashboard, Udemy school
        </h2>
        <h3 className="dashboardTitle2">Uyo/school/@teachable.com</h3>
        <div className="flex items-end">
          <div className="ml-[126px] py-[68px] pl-[90px] pr-[140px] flex flex-col justify-between items-start">
            <div className="mb-[56px] space-x-[20px] flex items-start justify-center">
              <img src={addAdmins} width={36} height={36} />
              <div className=" space-y-[16px]">
                <h4 className="cardTitle">Add other admins </h4>
                <p className="cardtext max-w-[464px]">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
            <div className="mb-[56px] space-x-[20px] flex items-start justify-center">
              <img src={addClass} width={36} height={36} />
              <div className=" space-y-[16px]">
                <h4 className="cardTitle">Add classes </h4>
                <p className="cardtext max-w-[464px]">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>

            <div className=" space-x-[20px] flex items-start justify-center">
              <img src={addStudent} width={36} height={36} />
              <div className=" space-y-[16px]">
                <h4 className="cardTitle">Add students </h4>
                <p className="cardtext max-w-[464px]">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>
          <button className="SupportBtn mb-[85px]">
            <img className="mr-[8px]" src={support1} width={16} height={16} />
            <span className="text-[16px] font-semibold text-[#FCFAFA]">
                    Support
                  </span>

            <img className="ml-[39px]" src={support2} width={16} height={16} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

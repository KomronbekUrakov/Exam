import NavBarLink from "../NavBarLink/NavBarLink";
import {
  Dashboard,
  Students,
  Billing,
  SettingsProfile,
  Exams,
  Features, New
} from "../../assets/images/Icons";

function Navbar() {
  return (
    <nav className="">
      <NavBarLink url={"/"} title={"Dashboard"}>
        <Dashboard />
      </NavBarLink>
      <NavBarLink url={"/teachers"} title={"Teachers"}>
        <Dashboard />
      </NavBarLink>
      <NavBarLink url={"/students"} title={"Students"}>
        <Students />
      </NavBarLink>
      <NavBarLink url={"/billing"} title={"Billing"}>
        <Billing />
      </NavBarLink>
      <NavBarLink url={"/settingsandprofile"} title={"Settings and profile"}>
        <SettingsProfile />
      </NavBarLink>
      <NavBarLink url={"/exams"} title={"exams"}>
        <Exams />
      </NavBarLink>
     <div className="mt-[116px]">
     <NavBarLink url={"/features"} >
        <Features />
        <p className="NavbarLink ml-[20px] mr-[20px]">Featurs</p>
        <New/>
      </NavBarLink>
     </div>
    </nav>
  );
}

export default Navbar;

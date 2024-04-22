import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import {Strelka} from "../../assets/images/Icons"

function NavBarLink({ children, title, url }) {
  return (
    <NavLink className={'flex NavlivnkWrap my-[8px]  items-center py-[15px]'} to={url}>
      {children}
      <span className=" NavbarLink font-semibold ml-[20px] mr-[12px] text-[18px]">{title}</span>
       <div className="Strelka hidden">
       <Strelka/>
       </div>
    </NavLink>
  );
}

export default NavBarLink;

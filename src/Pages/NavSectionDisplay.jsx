import React from "react";
import NavDisplay from "../Components/NavSection/NavDisplay";
import { Outlet } from "react-router-dom";
import Contact from "../Components/Footer/Contact";
import Year from "../Components/Footer/Year";
import Email from "../Components/Footer/Email";

function NavSectionDisplay() {
  return (
    <div>
      <NavDisplay />
      <div className="outletContainer">
        <Outlet />
      </div>
      <Email />
      <Contact />
      <Year />
    </div>
  );
}

export default NavSectionDisplay;

import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="p-[60px] md:flex p-[25px] w-[70vw] justify-between">
      <div className="flex gap-[20px]">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <h3>About </h3>
        <h3>contact</h3>
        <h3 className="hidden md:inline-block">Manufacturer</h3>

        <h3>Blogs</h3>
      </div>
      <div className="hidden md:inline">
        <p>Hotline:1-800-234-56</p>
      </div>
    </div>
  );
}

export default MainNav;

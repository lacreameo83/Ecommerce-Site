import React from "react";
import HomeOutlet from "../Components/OutLet/HomeOutlet";
import Satisfaction from "../Components/OutLet/Satisfaction";
import ShopNow from "../Components/OutLet/ShopNow";
import Produts from "../Components/OutLet/Produts";

function DisplayOutlet() {
  return (
    <div>
      <HomeOutlet />
      <Satisfaction />
      <ShopNow />
      <Produts />
    </div>
  );
}

export default DisplayOutlet;

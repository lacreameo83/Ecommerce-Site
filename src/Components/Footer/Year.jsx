import React from "react";

function Year() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col border  justify-between px-8 py-3 md:flex-row">
      <p className="text-[10px] sm:text-[15px]">
        Powered By OpenCart Cartfash-Mega Fashiob Store @ {year}
      </p>
      <div className="flex gap-3">
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/visa.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/discover.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/american_express.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/google_wallet.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/paypal.png" />
        <img src="https://capricathemes.com/opencart/OPC10/OPC100238/image/catalog/master_card.png" />
        <img src="" />
      </div>
    </div>
  );
}

export default Year;

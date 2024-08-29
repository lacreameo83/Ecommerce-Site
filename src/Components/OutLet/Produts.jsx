import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import ProductTemplate from "../Template/ProductTemplate";
import { motion } from "framer-motion";
import { v4 } from "uuid";

function Produts() {
  console.log(v4());

  const { data } = useContext(GlobalContext);
  console.log(data);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px] p-[10px] ">
          {data?.map((el, i) => {
            return (
              <div key={v4()} className="w-full h-[500px]">
                <ProductTemplate key={234567 + i} product={el} />;
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Produts;

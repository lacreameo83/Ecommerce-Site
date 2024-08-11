import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import ProductTemplate from "../Template/ProductTemplate";
import { motion } from "framer-motion";

function Produts() {
  const { data } = useContext(GlobalContext);
  console.log(data);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl: grid-cols-4 gap-[30px] p-[10px] ">
          {data?.map((el) => {
            return (
              <div className=" w-full h-[500px]  ">
                <ProductTemplate key={el.id} product={el} />;
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Produts;

import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
// import ProductTemplate from "../Template/ProductTemplate";

function SideBar() {
  const { isOpen, setIsOpen, cart, setCart } = useContext(GlobalContext);
  // const [count,setCount]=useState(0)
  console.log(cart);
  const handleIsOpen = () => {
    setIsOpen(false);
    // setTimeout(() => {
    //   setIsClosing(false);
    // }, 3000);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleAddQunatity = (el) => {
    console.log("CART", cart);

    const result = cart.map((product) => {
      if (product.id === el.id) {
        product.quantity += 1;
        product.totalPrice = el.price * el.quantity;
        return product;
      }
      return product;
    });
    console.log("RESULT", result);

    setCart(result);
  };

  const handleSubstractQuantity = (el) => {
    const result = cart.map((product) => {
      if (product.id === el.id) {
        if (el.quantity === 1) {
          return el;
        } else {
          el.quantity -= 1;
          el.totalPrice = el.price * el.quantity;
          return el;
        }
      }
      return el;
    });
    setCart(result);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 bg-white right-0 w-[100%] h-[80vh] mt-[20px] shadow-2xl border transition-all duration-300 overflow-x-auto">
          <div>
            <div className="flex justify-between p-[10px] text-black border border-b-slate-50 shadow-2xl">
              <p>Shopped Items</p>
              <IoIosCloseCircle onClick={handleIsOpen} />
            </div>
            <div>
              {cart.map((el) => {
                return (
                  <div
                    key={v4()}
                    className="grid grid-cols-4  shadow-lg p-[30px] items-center "
                  >
                    <div>
                      <div className="w-[100px] h-[100px]">
                        <img className="w-full h-full " src={el.image} />
                      </div>
                    </div>
                    <div>
                      <p className="text-stone-500">{el.title}</p>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => handleAddQunatity(el)}
                        className="text-black border"
                      >
                        Increase
                      </button>
                      <h2 className="text-center text-black px-6 font-semibold">
                        {el.quantity} x ${el.price}: Total = ${el.totalPrice}
                      </h2>
                      <button
                        onClick={() => handleSubstractQuantity(el)}
                        className="text-black border"
                      >
                        Decrease
                      </button>
                    </div>

                    <button
                      className="text-red-500 "
                      onClick={() => removeFromCart(el.id)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-[10px] border  border-stone-200 mb-[20px] text-black flex justify-around h-[10vh]  items-center font-extrabold">
              Total : $
              {cart
                .map((el) => el.totalPrice)
                .reduce((prev, cur) => {
                  return prev + cur;
                }, 0)}
            </div>
            <div className=" border  border-stone-200 mb-[20px] flex justify-around h-[10vh]  items-center font-extrabold text-black">
              <Link to="/payment">
                <h2>Check Out</h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;

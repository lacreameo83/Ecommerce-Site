import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { IoIosCloseCircle } from "react-icons/io";
// import ProductTemplate from "../Template/ProductTemplate";

function SideBar() {
  const { isOpen, setIsOpen, cart, setCart } = useContext(GlobalContext);

  console.log(cart);
  const handleIsOpen = () => {
    setIsOpen(false);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 bg-white right-0 w-[100%] h-[80vh] mt-[20px] shadow-2xl border transition-all duration-300 overflow-x-auto">
          <div>
            <div className="flex justify-between p-[10px] border border-b-slate-50 shadow-2xl">
              <p>Shopped Items</p>
              <IoIosCloseCircle onClick={handleIsOpen} />
            </div>
            <div>
              {cart.map((el) => {
                return (
                  <div
                    key={el.id}
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
                    <h2 className="text-end font-semibold">${el.price}</h2>
                    <button onClick={() => removeFromCart(el.id)}>
                      Remove
                    </button>
                    {/* <h2
                      // onClick={() => removeFromCart(item.id)}
                      onClick={() => removeFromCart(item.id)}
                      className="text-end text-red-600"
                    >
                      Delete
                    </h2> */}
                    {/* <ul>
                      {cart.map((item) => (
                        <li key={item.id}>
                          <button onClick={() => removeFromCart(item.id)}>
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                );
              })}
            </div>

            <div className="p-[10px] border  border-stone-200 mb-[20px] flex justify-around h-[10vh]  items-center font-extrabold">
              Total : $
              {cart
                .map((el) => el.price)
                .reduce((prev, cur) => {
                  return prev + cur;
                }, 0)}
            </div>
            <div className=" border  border-stone-200 mb-[20px] flex justify-around h-[10vh]  items-center font-extrabold">
              <h2>Check Out</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;

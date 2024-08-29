import React, { useContext, useState } from "react";
import { TiEyeOutline } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

function ProductTemplate({ product }) {
  const { cart, setCart } = useContext(GlobalContext);
  const { id, title, image, price } = product;

  const obj = {
    ...product,
    quantity: 1,
    totalPrice: product.price,
  };

  // notification
  const [isclicked, setIsClicked] = useState(false);

  const addCart = (product) => {
    const check = cart.some((el) => el.id === product.id);
    console.log(cart);

    // console.log(check);

    if (cart.length > 0 && check) {
      const result = cart.map((items) => {
        if (items.id === product.id) {
          items.quantity += 1;
          items.totalPrice = items.price * items.quantity;
          return items;
        }
        return items;
      });
      setCart(result);
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div>
      <div className="border border-stone-300 bg-white h-[400px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transiton duration 300"
              src={image}
            />
          </div>
          {/* for side buttons */}
          <div className="absolute top-0 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:top-3">
            <button>
              <div
                onClick={() => addCart(obj)}
                className="flex justify-center items-center text-white w-7 h-7 rounded-[100%] bg-blue-500 "
              >
                <CiCirclePlus className="text-3xl" />
              </div>
            </button>
            <Link
              className="text-white flex justify-center items-center text-primary drop-shadow-xl w-7 h-7 rounded-[100%] bg-blue-500 mb-2"
              to={`/displayProduct/${id}`}
            >
              <TiEyeOutline />
            </Link>
            <button>
              <div className="flex justify-center items-center text-white w-7 h-7 rounded-[100%] bg-blue-500">
                <CiHeart className="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* for the display categories tittles*/}
      <div className="h-[20vh] mb-[30vh]">
        <Link to={`/displayProduct/${id}`}>
          <h2>{title}</h2>
        </Link>

        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default ProductTemplate;

//  <p>{title}</p>
//         <p>{price}</p>
//         <button>Add To Cart</button>

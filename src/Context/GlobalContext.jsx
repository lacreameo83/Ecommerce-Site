import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  // state for display product data to cart and fetching the data
  const [data, setData] = useState([]);
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  // handling cart items

  const [cart, setCart] = useState([]);

  const handleisClose = () => {
    setIsOpen(!isOpen);
  };
  const [islogin, setisLogin] = useState("Log In");

  //   fetching data
  const dataFetching = async () => {
    try {
      const respone = await axios.get("https://fakestoreapi.com/products");
      setData(respone.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        isOpen,
        setIsOpen,
        handleisClose,
        cart,
        setCart,
        islogin,
        setisLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

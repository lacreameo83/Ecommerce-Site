import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);
import axios from "axios";
import ProductTemplate from "../Components/Template/ProductTemplate";

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
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function DispalyProduct() {
  let param = useParams();
  console.log(param);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>i am display Products</div>;
}

export default DispalyProduct;

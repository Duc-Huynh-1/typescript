import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPRoduct } from "../interface/product";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IPRoduct>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${Number(id)}`)
      .then(({ data }) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>DetailProduct:</h1> <br />
      <h1>Name: {product?.name}</h1>
      <h2>Price: {product?.price}</h2>
    </div>
  );
};

export default DetailProduct;

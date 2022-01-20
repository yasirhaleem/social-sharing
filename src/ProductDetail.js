import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import { Helmet } from "react-helmet";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
    <div>
      <Helmet>
        <title>{thisProduct.name}</title>
        <meta name="description" content={thisProduct.description} />
      </Helmet>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
}

export default ProductDetail;

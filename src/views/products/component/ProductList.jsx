import React from "react";
import ProductItem from "../../Home/component/Products/ProductItem";
export default function ProductList(props) {
  console.log(props.data);
  return (
    <>
      <div className="row bg-light p-4">
        {props.data.map((item, index) => {
          return <ProductItem item={item} index={index} />;
        })}
      </div>
    </>
  );
}

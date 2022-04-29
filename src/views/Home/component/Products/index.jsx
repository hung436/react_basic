import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { getProduct } from "../../../../services/productService";
export default function Products() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // fetch('https://phanolink.herokuapp.com/api/products?feature')
    //     .then((res) => res.json())
    //     .then((res) => {setHotPromoList(res.data.slice(0, 9))});
    // if (!isLoaded.current && inView) {
    //   (async () => {
    //     setLoading(true);
    const fetchapi = async () => {
      const res = await getProduct(0);

      setList(res.data.rows);
    };
    fetchapi();

    // setLoading(false);
    //   })();
    //   isLoaded.current = true;
  }, []);
  return (
    <>
      <div className="p-2 bg-light">
        <div className="d-flex justify-content-end">
          <Link>{"Xem tất cả -->"}</Link>
        </div>
        <hr />
        <div className="row ">
          {list.map((item, index) => {
            return <ProductItem item={item} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}

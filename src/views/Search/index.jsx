import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { searchProduct } from '../../services/productService';
import ProductItem from '../Home/component/Products/ProductItem';
const Search = () => {
  const {
    params: { keyword },
  } = useRouteMatch();
  const [Product, setProduct] = useState([]);
  const search = async () => {
    try {
      let res = await searchProduct(keyword);
      if (res.errorCode === 0) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    search();
  }, [keyword]);
  return (
    <div className="container">
      <h3>Kết quả tìm kiếm cho "{keyword}" :</h3>
      <div className="p-2 bg-light">
        {/* <div className="d-flex justify-content-end">
          <Link to="/product">{"Xem tất cả -->"}</Link>
        </div> */}
        <hr />
        <div className="row ">
          {Product.map((item, index) => {
            return <ProductItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

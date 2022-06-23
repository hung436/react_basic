import { getProductByID } from '../../../services/productService';
import Quantity from '../../../component/Quantity';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemCart } from '../cartSlice';

function CartItem({ item, onChange }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const isPromo = product?.discount !== 0;
  const price = parseInt(product?.price);
  let discountPercent;
  let priceAfterDiscount;
  // if (isPromo) {
  //   // discountPercent = parseInt(product?.discount?.slice(0, -1)) / 100;
  //   priceAfterDiscount = parseInt(price) - parseInt(price) * discountPercent;
  // }
  const handleButtonDeleteClick = () => {
    const action = deleteItemCart(product.id);
    dispatch(action);
  };

  const handleQuantityChange = (value) => {
    if (!onChange) return;
    onChange(item.idProduct, value);
  };

  useEffect(() => {
    (async function () {
      try {
        const data = await getProductByID(item.idProduct);
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.idProduct]);

  return (
    <>
      <hr className="my-4" />
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <Link to={`/product/${item.idProduct}`}>
            <img
              src={
                process.env.REACT_APP_BACKEND_URL +
                '/uploads/' +
                product.image_link
              }
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </Link>
        </div>
        <div className="col-md-3 ">
          {/* <h6 className="text-muted">Shirt</h6> */}
          <h6 className="text-black mb-0">{product.name}</h6>
        </div>
        <div className="col-md-3 d-flex">
          <Quantity count={item.quantity} onChange={handleQuantityChange} />
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">
            {isPromo
              ? (item.priceAfterDiscount * item.quantity).toLocaleString(
                  'it-IT',
                  {
                    style: 'currency',
                    currency: 'VND',
                  }
                )
              : (item.price * item.quantity).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
          </h6>
        </div>
        <div
          className="col-md-1 col-lg-1 col-xl-1 text-end"
          onClick={handleButtonDeleteClick}
        >
          <a href="#!" className="text-muted">
            <i className="fas fa-times" />
          </a>
        </div>
      </div>
    </>
  );
}

export default CartItem;

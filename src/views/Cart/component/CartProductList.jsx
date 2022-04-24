import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToCart } from "../cartSlice";
import CartItem from "./CartItem.jsx";
import "./cart.scss";
function CartProductList(props) {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const onChange = (idProduct, quantity) => {
    const action = changeToCart({
      idProduct,
      quantity,
    });
    dispatch(action);
  };
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold mb-0 text-black">Giỏ hàng</h1>
        <h6 className="mb-0 text-muted">{props.count} Sản phẩm</h6>
      </div>
      {cartItem &&
        cartItem.map((item, idx) => (
          <CartItem onChange={onChange} item={item} key={idx} />
        ))}
      <hr className="my-4" />
      <div className="pt-5">
        <h6 className="mb-0">
          <Link to="/" className="text-body">
            <i className="fas fa-long-arrow-alt-left me-2" />
            Trở về trang chủ
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default CartProductList;

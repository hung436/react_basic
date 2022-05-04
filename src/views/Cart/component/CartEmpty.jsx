import React from "react";
import { Link } from "react-router-dom";
import emtyImage from "../../../assets/images/cart-mty.png";
export default function CartEmpty() {
  return (
    <div
      // style={{ height: "50vh" }}
      className="d-flex justify-content-center align-center"
    >
      <div className="text-center">
        <img src={emtyImage} alt="" />
        <h3>Giỏ hàng trống</h3>
        <p>
          Khách hàng vui lòng thêm sản phẩm vào giỏ hàng tại{" "}
          <Link to="product">đây</Link>
        </p>
      </div>
    </div>
  );
}

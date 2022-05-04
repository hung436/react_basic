import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import cart from "../../../assets/images/cart.png";
export default function CartSuccess() {
  const {
    params: { id },
  } = useRouteMatch();
  return (
    <div className="row">
      <div className="col-sm-3 ">
        <img src={cart} alt="" />
      </div>

      <div className="col-sm-6 d-flex justify-content-center">
        <div>
          <h1 className="text-success">Đặt hàng thành công</h1>
          <p>Cảm ơn bạn đã đặt hàng</p>
          <p>Mã đơn hàng của bạn là: &nbsp; {id}</p>
          <p>
            Chúng tôi sẽ giao hàng cho bạn trong vòng từ 2-4 ngày làm việc.
            <br />
            Nếu có yêu cầu đặt biệt quý khách hàng liên hệ Hostline:
            <p className="text-danger">1900 1900 - 1900 0590</p>
            <p>
              Nếu muốn thay đổi đơn hàng hoặc theo dõi trạng thái của đơn hàng{" "}
              <br />
              Vui lòng vào mục Tài khoản
              <Link to="/user/order">{">>"}Đơn hàng của bạn </Link>
            </p>
          </p>
        </div>
      </div>
      <div className="col-sm-3 ">
        <img src={cart} alt="" />
      </div>
    </div>
  );
}

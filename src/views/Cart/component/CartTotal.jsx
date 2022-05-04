import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { cartDiscountSelector, cartTotalSelector } from "../selector";
import { order } from "../../../services/userService";
import { useDispatch } from "react-redux";
import { paymentSuccess } from "../cartSlice";

function CartTotal({ showLoading, hideLoading }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = useRouteMatch();
  const history = useHistory();
  const price = useSelector(cartTotalSelector);
  const discount = useSelector(cartDiscountSelector);
  const user = useSelector((state) => state.user.current);
  const cart = useSelector((state) => state.cart.cartItems);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (location.pathname === "/cart/confirm") setIsConfirm(true);
    else setIsConfirm(false);

    if (location.pathname === "/cart/success") setIsSuccess(true);
    else setIsSuccess(false);
  }, [location.pathname]);

  const handleClick = async () => {
    if (!isConfirm) {
      history.push(`${path.url}/confirm`);
      setIsConfirm(true);
      return;
    }

    // Delete Cart
    if (
      user &&
      user.addressId !== null &&
      user.addressId !== undefined &&
      cart
    ) {
      const cartTotal = cart.map((item) => {
        const i = { ...item };
        if (i.priceAfterDiscount) delete i.priceAfterDiscount;
        if (i.idProduct) {
          i.id = i.idProduct;
          delete i.idProduct;
        }
        return i;
      });

      const dataSend = {
        total: price,
        payment_method: "Cash on Delivery",
        status: 1,
        address_id: user.addressId,
        products: [...cartTotal],
      };

      try {
        const res = await order(dataSend);
        if (res.errorCode === 0) {
          const action = paymentSuccess();
          dispatch(action);
          toast.success("Đặt hàng thành công!");
          history.replace(`${path.url}/success/${res.id}`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Vui lòng cập nhật thông tin đặt hàng");
    }
  };

  return (
    <div className="p-5">
      <h3 className="fw-bold mb-5 mt-2 pt-1">Tổng kết</h3>
      <hr className="my-4" />
      <div className="d-flex justify-content-between mb-4">
        <h5 className="text-uppercase">Tạm tính</h5>
        <h5>
          {price &&
            (price + (discount || 0)).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
        </h5>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <h5 className="text-uppercase">Giảm giá</h5>
        <h5>
          {discount &&
            discount.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
        </h5>
      </div>
      <h5 className="text-uppercase mb-3">Shipping</h5>
      <div className="mb-4 pb-2">
        <select className="select">
          <option value={1}>Standard-Delivery- €5.00</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
        </select>
      </div>
      {isSuccess || isConfirm || (
        <>
          <h5 className="text-uppercase mb-3">Mã giảm giá</h5>
          <div className="mb-5 ">
            <div className="form-outline">
              <input
                type="text"
                id="form3Examplea2"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Examplea2">
                Enter your code
              </label>
            </div>
            <button className="btn btn-primary">ÁP DỤNG</button>
          </div>
        </>
      )}

      <hr className="my-4" />
      <div className="d-flex justify-content-between mb-5">
        <h5 className="text-uppercase">Tổng tiền</h5>
        <div>
          <h5>
            {price &&
              price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
          </h5>
          <span>(Đã bao gồm VAT nếu có)</span>
        </div>
      </div>
      {isSuccess || (
        <>
          <button
            className="btn btn-dark btn-block "
            data-mdb-ripple-color="dark"
            onClick={handleClick}
          >
            {!isConfirm ? "TIẾN HÀNH ĐẶT HÀNG" : "XÁC NHẬN THANH TOÁN"}
          </button>
          <button
            className="btn btn-dark btn-block"
            data-mdb-ripple-color="dark"
            onClick={() => {
              history.goBack();
            }}
          >
            QUAY LẠI
          </button>
        </>
      )}
    </div>
  );
}

export default CartTotal;

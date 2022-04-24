import { getProductByID } from "../../../services/productService";
import Quantity from "../../../component/Quantity";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItemCart } from "../cartSlice";

function CartItem({ item, onChange, hideLoading, showLoading }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const isPromo = product?.discount !== "No";
  const price = parseInt(product?.price);
  let discountPercent;
  let priceAfterDiscount;
  if (isPromo) {
    // discountPercent = parseInt(product?.discount?.slice(0, -1)) / 100;
    priceAfterDiscount = parseInt(price) - parseInt(price) * discountPercent;
  }
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
    // <div className="item">
    //   <Link to={`/product/${item.idProduct}`}>
    //     <img
    //       className="mw-25"
    //       src={"http://localhost:8080/uploads/" + product.image_link}
    //       alt=""
    //     />
    //   </Link>
    //   <div className="item__info">
    //     <div className="description">
    //       <Fragment>
    //         <p>{product.name}</p>
    //         <span className="btn btn-warning" onClick={handleButtonDeleteClick}>
    //           Xóa
    //         </span>
    //       </Fragment>
    //     </div>
    //     <div className="price">
    //       <Fragment>
    //         <p className="price__new">
    //           {isPromo && priceAfterDiscount
    //             ? (priceAfterDiscount * item.quantity).toLocaleString("it-IT", {
    //                 style: "currency",
    //                 currency: "VND",
    //               })
    //             : price * item.quantity
    //             ? (price * item.quantity).toLocaleString("it-IT", {
    //                 style: "currency",
    //                 currency: "VND",
    //               })
    //             : ""}
    //           &nbsp;
    //         </p>
    //         {product.discount !== "No" && (
    //           <span className="price__discount">-{product.discount}</span>
    //         )}
    //         {isPromo && (
    //           <span className="price__old">
    //             {(price * item.quantity).toLocaleString("it-IT", {
    //               style: "currency",
    //               currency: "VND",
    //             })}
    //             &nbsp;
    //           </span>
    //         )}
    //       </Fragment>
    //     </div>

    //     <Quantity count={item.quantity} onChange={handleQuantityChange} />
    //   </div>
    // </div>
    <>
      <hr className="my-4" />
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <Link to={`/product/${item.idProduct}`}>
            <img
              src={"http://localhost:8080/uploads/" + product.image_link}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </Link>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          {/* <h6 className="text-muted">Shirt</h6> */}
          <h6 className="text-black mb-0">{product.name}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <Quantity count={item.quantity} onChange={handleQuantityChange} />
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">
            {(price * item.quantity).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
            &nbsp;
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

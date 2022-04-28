import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Cart/cartSlice";
import { openModal } from "../../../Auth/userSlice";
import "./ProductItem.scss";
import { toast } from "react-toastify";
export default function ProductItem(props) {
  const { item, index } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  const { path } = useRouteMatch();
  const handleAddToCartClick = () => {
    if (user) {
      //add to cart by user id
      let action = addToCart({
        idProduct: item.id,
        quantity: 1,
        price: item.price,
        priceAfterDiscount: item.discount,
        name: item.name,
      });
      // if (isPromo && priceAfterDiscount) {
      //   action = addToCart({
      //     idProduct: product.id,
      //     quantity,
      //     price,
      //     priceAfterDiscount: priceAfterDiscount,
      //     name: product.name,
      //   });
      // }
      dispatch(action);
      toast.success("Thêm vào giỏ hàng thành công!");
      return;
    }
    toast.warn("Đăng nhập để thêm vào giỏ hàng!");
    const action = openModal();
    dispatch(action);
  };
  return (
    <div className="col-md-3 col-sm-6 mb-3">
      <div className="product-grid">
        <div className="product-image">
          <Link to={`/product/${item.id}`} className="image">
            <img
              className="img-thumbnail"
              src={
                process.env.REACT_APP_BACKEND_URL +
                "/uploads/" +
                item.image_link
              }
              alt=""
            />
          </Link>
          <span className="product-discount-label">-23%</span>
          <ul className="product-links">
            <li>
              <Link>
                <i className="fa fa-search" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-heart" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa fa-random" />
              </Link>
            </li>
            <li>
              <Link href="#" onClick={handleAddToCartClick}>
                <i className="fa-solid fa-cart-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="product-content">
          <h3 className="title">
            <div>{item.name}</div>
          </h3>
          <div className="price">
            {item.price} <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

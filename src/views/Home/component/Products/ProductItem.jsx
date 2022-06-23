import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Cart/cartSlice';
import { openModal } from '../../../Auth/userSlice';
import './ProductItem.scss';
import { addFavorites } from '../../../../services/userService';
import { toast } from 'react-toastify';

function ProductItem(props) {
  const { item } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);

  let isPromo = item?.discount !== 0;
  let priceAfterDiscount;
  if (isPromo) {
    priceAfterDiscount = item.price - (item.price * item.discount) / 100;
  }
  const handleAddToCartClick = () => {
    if (user) {
      //add to cart by user id
      let action = addToCart({
        idProduct: item.id,
        quantity: 1,
        price: item.price,
        priceAfterDiscount: item.price,
        name: item.name,
      });

      if (isPromo && priceAfterDiscount) {
        action = addToCart({
          idProduct: item.id,
          quantity: 1,
          price: item.price,
          priceAfterDiscount: item.discount,
          name: item.name,
        });
      }
      dispatch(action);
      toast.success('Thêm vào giỏ hàng thành công!');
      return;
    }
    toast.warn('Đăng nhập để thêm vào giỏ hàng!');
    const action = openModal();
    dispatch(action);
  };
  const handleAddFavorite = () => {
    (async function () {
      // showLoading();
      try {
        const res = await addFavorites({ id: item.id });
        if (res.errorCode === 0) {
          setIsFavorite(true);
          toast.success('Đã yêu thích sản phẩm');
        }
      } catch (error) {}
      // hideLoading();
    })();
  };
  return (
    <div className="col-md-3 col-6 mb-3">
      <div className="product-grid">
        <div className="product-image">
          <Link
            to={`/product/${item.id}`}
            className="bg-image hover-zoom ripple shadow-1-strong rounded"
          >
            <img
              className=""
              src={
                process.env.REACT_APP_BACKEND_URL +
                '/uploads/' +
                item.image_link
              }
              alt=""
            />
          </Link>
          {item.discount !== 0 ? (
            <span className="product-discount-label">{-item.discount}%</span>
          ) : (
            ''
          )}
          <ul className="product-links">
            <li>
              <div>
                <i className="fa fa-search" />
              </div>
            </li>
            <li>
              <div onClick={handleAddFavorite}>
                <i className="fa fa-heart" />
              </div>
            </li>

            <li>
              <div onClick={handleAddToCartClick}>
                <i className="fa-solid fa-cart-plus"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="product-content">
          <h3 className="title">
            <div>{item.name}</div>
          </h3>
          <div className="price">
            {isPromo ? (
              <>
                {priceAfterDiscount.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}{' '}
                <span>
                  {item.price.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </span>
              </>
            ) : (
              item.price.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;

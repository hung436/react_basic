import { getProductByID } from "../../../services/productService";
import Quantity from "../../../component/Quantity/index";
import React, { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../Auth/userSlice";
import { addToCart } from "../../Cart/cartSlice";
import {
  getIsFavoriteProduct,
  addFavorites,
  deteleFavoriteProduct,
} from "../../../services/userService";
import "./product-detail-page.scss";
function ProductDetailPage() {
  const {
    params: { id },
  } = useRouteMatch();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);

  useEffect(() => {
    (async function () {
      setLoading(true);

      try {
        const data = await getProductByID(id);
        setProduct(data.data);
      } catch (error) {}
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const rs = await getIsFavoriteProduct(id);
          if (rs.errorCode === 1) setIsFavorite(false);
          if (rs.errorCode === 0) setIsFavorite(true);
        } catch (error) {}
      })();
    } else {
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  const handleAddToCartClick = () => {
    if (user) {
      //add to cart by user id
      let action = addToCart({
        idProduct: product.id,
        quantity,
        price,
        priceAfterDiscount: price,
        name: product.name,
      });
      if (isPromo && priceAfterDiscount) {
        action = addToCart({
          idProduct: product.id,
          quantity,
          price,
          priceAfterDiscount: priceAfterDiscount,
          name: product.name,
        });
      }
      dispatch(action);
      toast.success("Thêm vào giỏ hàng thành công!");
      return;
    }
    toast.warn("Đăng nhập để thêm vào giỏ hàng!");
    const action = openModal();
    dispatch(action);
  };

  const isPromo = product?.discount !== 0;
  const price = parseInt(product?.price);
  let discountPercent;
  let priceAfterDiscount;
  if (isPromo) {
    discountPercent = product.discount / 100;
    priceAfterDiscount = parseInt(price) - parseInt(price) * discountPercent;
  }

  const handleFavoriteClick = () => {
    (async function () {
      try {
        const res = await addFavorites({ id: product.id });
        console.log(res);
        if (res.errorCode === 0) {
          setIsFavorite(true);
          toast.success("Đã yêu thích sản phẩm");
        }
      } catch (error) {}
    })();
  };

  const handleDeleteFavorite = () => {
    (async function () {
      try {
        const res = await deteleFavoriteProduct(product.id);
        if (res.errorCode === 0) {
          setIsFavorite(false);
          toast.success("Đã xóa yêu thích sản phẩm");
        }
      } catch (error) {}
    })();
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-page__content">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-5 col-sm-12">
              <div className="thumbnail-main">
                {loading ? (
                  <Skeleton />
                ) : (
                  <img
                    className="img-fluid img-thumbnail"
                    src={
                      process.env.REACT_APP_BACKEND_URL +
                      "/uploads/" +
                      product.image_link
                    }
                    alt=""
                  />
                )}
              </div>
              {/* <div className="list">
              {loading ? (
               <Skeleton count={3} height={50} width={50} />
              ) : ( 
              <Fragment>
                <img src={product.images[0].url || ""} alt="" />
               <img src={product.images[0].url || ""} alt="" />
                <img src={product.images[0].url || ""} alt="" />
                
              </Fragment>
               )}
             </div> */}
            </div>
            <div
              id="product-detail-page__info"
              className="col-12 col-lg-7 col-md-7 col-sm-12"
            >
              {loading ? (
                <Skeleton
                  height={26}
                  width={"95%"}
                  style={{ margin: "0 20px" }}
                />
              ) : (
                <p className="short-desc">{product.name}</p>
              )}
              <div className="trademark">
                {loading ? (
                  <Skeleton
                    height={26}
                    width={184}
                    style={{ margin: "0 20px" }}
                  />
                ) : (
                  <p>
                    Danh Mục Sản phẩm: &nbsp;
                    <span>{product.category.name}</span>
                  </p>
                )}

                {loading ? (
                  <Skeleton height={26} width={150} />
                ) : (
                  <p>Mã SP: {product.id}</p>
                )}
              </div>
              <div className="info-detail">
                {loading ? (
                  <Skeleton height={75} width={"95%"} />
                ) : (
                  <p>{product?.content}</p>
                )}
              </div>
              <div className="main-info">
                {loading ? (
                  <Fragment>
                    <Skeleton height={24} width={150} />
                    <Skeleton height={24} width={150} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <p className="price">
                      Giá: &nbsp;
                      <span>
                        {isPromo && priceAfterDiscount
                          ? priceAfterDiscount.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          : price
                          ? price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          : ""}
                      </span>
                    </p>
                    {isPromo && (
                      <p className="price">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span
                          style={{
                            textDecoration: "line-through",
                            opacity: "0.4",
                          }}
                        >
                          {price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </p>
                    )}
                  </Fragment>
                )}

                <p className="status">
                  Tình trạng:&nbsp; <span>Còn Hàng</span>
                </p>

                <div className="buy row">
                  <div className="col-lg-4 col-md-4 col-sm-12 d-flex">
                    <Quantity
                      count={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                  <div
                    className="buy__btn col-lg-3 col-md-3 col-sm-6"
                    onClick={handleAddToCartClick}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span>Chọn Mua</span>
                  </div>
                  {isFavorite ? (
                    <div
                      onClick={handleDeleteFavorite}
                      style={{ marginLeft: "10px" }}
                      className="buy__btn heart col-lg-3 col-md-3 col-sm-6"
                    >
                      <i className="fas fa-heart-broken"></i>
                      <span>Xóa Yêu Thích</span>
                    </div>
                  ) : (
                    <div
                      onClick={handleFavoriteClick}
                      style={{ marginLeft: "10px" }}
                      className="buy__btn heart col-lg-3 col-md-3 col-sm-6"
                    >
                      <i className="fas fa-heart"></i>
                      <span>Yêu Thích</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-info">
          <h4>Thông tin sản phẩm</h4>

          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: product.descrition }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;

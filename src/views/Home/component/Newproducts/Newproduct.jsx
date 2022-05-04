import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct } from "../../../../services/productService";
import iconHotPromotion from "../../../../assets/images/icon-feature-product.svg";
// import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import "../Hotproducts/Hotproducts.scss";
function Newproduct() {
  const [newPromoList, setNewPromoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const mouted = useRef(true);
  const isLoaded = useRef(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    // fetch('https://phanolink.herokuapp.com/api/products?feature')
    //     .then((res) => res.json())
    //     .then((res) => {setHotPromoList(res.data.slice(0, 9))});
    mouted.current = true;
    // if (!isLoaded.current && inView) {
    //   (async () => {
    //     setLoading(true);
    const fetchapi = async () => {
      const res = await getProduct(0);

      let list = res.data.rows;
      if (mouted.current) setNewPromoList(list);
    };
    fetchapi();
    // setLoading(false);
    //   })();
    //   isLoaded.current = true;
    return () => {
      mouted.current = false;
    };
  }, [inView]);

  return (
    <section className="hot-promotion">
      <div className="hot-promotion__content">
        <div className="hot-promotion__top">
          <div className="hot-promotion__title">
            <img src={iconHotPromotion} alt="" />
            <span>Sản phẩm mới</span>
          </div>
          <Link to="/product?sort-by-sale=true" className="see-all">
            Xem tất cả &nbsp; &gt;
          </Link>
        </div>
        {/* {loading ? (
            <Skeleton
              className="skeleton"
              containerClassName="slide-skeleton"
              count={3}
            /> */}
        {/* ) : ( */}
        <Slider {...settings} className="hot-promotion__list  text-center">
          {newPromoList.map((item, index) => (
            <div key={index}>
              <Link className="hot-promotion__item" to={`/product/${item.id}`}>
                {item.discount > 0 && (
                  <div className="discount">{"-" + item.discount + "%"}</div>
                )}

                <img
                  className="img-fluid"
                  src={
                    process.env.REACT_APP_BACKEND_URL +
                    "/uploads/" +
                    item.image_link
                  }
                  alt=""
                />
              </Link>
              <div className="">{item.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Newproduct;

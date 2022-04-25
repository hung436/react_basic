import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct } from "../../../../services/productService";
import iconHotPromotion from "../../../../assets/images/icon-hot-promotion.svg";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import "./Hotproducts.scss";
function Hotproduct() {
  const [hotPromoList, setHotPromoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const mouted = useRef(true);
  const isLoaded = useRef(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      if (mouted.current) setHotPromoList(list);
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
      <div className="container">
        <div className="hot-promotion__content">
          <div className="hot-promotion__top">
            <div className="hot-promotion__title">
              <img src={iconHotPromotion} alt="" />
              <span>Khuyễn Mãi Hot</span>
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
            {hotPromoList.map((item) => (
              <>
                <Link
                  key={item.id}
                  className="hot-promotion__item"
                  to={`/product/${item.id}`}
                >
                  <img
                    className="img-thumbnail"
                    src={"http://localhost:8080/uploads/" + item.image_link}
                    alt=""
                  />
                </Link>
                <div className="">{item.name}</div>
              </>
            ))}
          </Slider>
          {/* )} */}
        </div>
      </div>
    </section>
  );
}

export default Hotproduct;

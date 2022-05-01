import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProductFill } from "../../../../services/productService";
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
    //     .then((res) => res.json())
    //     .then((res) => {setHotPromoList(res.data.slice(0, 9))});
    mouted.current = true;

    setLoading(true);
    const fetchapi = async () => {
      const res = await getProductFill("ALL", "free");

      let list = res;
      if (mouted.current) setHotPromoList(list);
    };
    fetchapi();
    setLoading(false);
    //   })();
    //   isLoaded.current = true;
    return () => {
      mouted.current = false;
    };
  }, [inView]);

  return (
    <section className="hot-promotion">
      {/* <div className="container"> */}
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
        {loading ? (
          <Skeleton
            className="skeleton"
            containerClassName="slide-skeleton"
            count={3}
          />
        ) : (
          <Slider {...settings} className="hot-promotion__list  text-center">
            {hotPromoList.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    className="hot-promotion__item"
                    to={`/product/${item.id}`}
                  >
                    <div className="discount">{"-" + item.discount + "%"}</div>
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
              );
            })}
          </Slider>
        )}
      </div>
      {/* </div> */}
    </section>
  );
}

export default Hotproduct;

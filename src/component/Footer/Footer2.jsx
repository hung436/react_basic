import React from "react";
import { Link } from "react-router-dom";
import "./Footer2.scss";
import appStore from "../../assets/images/appstore.png";
import googlePlay from "../../assets/images/googleplay.png";
import QRcode from "../../assets/images/QRcode.png";
export default function Footer2() {
  return (
    <div>
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row mt-3">
            <div className="col-md-4  col-12 d-flex justify-content-center">
              <div>
                <h1 className="footer__heading">SHOP HTN</h1>
                <p>Xin kính chào quý khách</p>
              </div>
            </div>
            <div className="col-md-1 col-6 d-flex justify-content-center">
              <div>
                <h3 className="footer__heading">Giới thiệu </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Tuyển dụng
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Điều khoản
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6 d-flex justify-content-center ">
              <div>
                <h3 className="footer__heading">Chăm sóc khách hàng </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <Link to="/about" className="footer-item-link">
                      Trung tâm trợ giúp
                    </Link>
                  </li>

                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Hướng dẫn mua hàng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-1 col-6 d-flex justify-content-center">
              <div>
                <h3 className="footer__heading">Danh mục</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Điện thoại
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Phụ kiện
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link">
                      Máy tính
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1 col-6 d-flex justify-content-center">
              <div>
                <h3 className="footer__heading">Theo dõi</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link text-primary">
                      <i className="footer-item__icon fab fa-facebook-square" />
                      Facebook
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link text-danger">
                      <i className="footer-item__icon fab fa-instagram-square" />
                      Instagram
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link to="/##" className="footer-item-link text-info ">
                      <i className="footer-item__icon fab fa-linkedin" />
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-12 d-flex justify-content-center ">
              <div>
                <h3 className="footer__heading">Vào cửa hàng</h3>
                <div className="footer__download">
                  <img
                    src={QRcode}
                    alt="Download QR"
                    className="footer__download-qr"
                  />
                  <div className="footer__download-apps">
                    <Link to="/##" className="footer__download-app-link">
                      <img
                        src={googlePlay}
                        alt="Google Play"
                        className="footer__download-app-img"
                      />
                    </Link>
                    <Link to="/##" className="footer__download-app-link">
                      <img
                        src={appStore}
                        alt="App Store"
                        className="footer__download-app-img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide">
            <p className="footer__text">
              © 2022 - Bản quyền thuộc về Công ty TNHH 3TV NHT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

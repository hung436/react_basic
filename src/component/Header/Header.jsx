import React from "react";
import Navigate from "./component/Navigate";
import "./Header.scss";
import HeaderLogo from "../../assets/images/header-logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <Link
              to="/"
              id="h_logo"
              className="col-12 col-lg-3 col-md-3 col-sm-12  "
            >
              <img src={HeaderLogo} alt="logo" className="img-responsive" />
            </Link>
            <div id="h_search" className="col-12 col-lg-5 col-md-5 col-sm-12">
              <input
                type="search"
                placeholder="Nhập tên sản phẩm"
                className="form-control"
              />
              <div className="btn btn-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <Link
              to="/cart"
              id="h_cart"
              className="col-12 col-lg-2 col-md-2 col-sm-12 "
            >
              <div>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>3</span>
              </div>
              <p>Giỏ hàng</p>
            </Link>
            <div id="h_login" className="col-12 col-lg-2 col-md-2 col-sm-12">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
          </div>
        </div>
      </header>
      <Navigate />
    </>
  );
};
export default Header;

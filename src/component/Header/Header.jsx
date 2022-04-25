import React, { useState } from "react";
import Navigate from "./component/Navigate";
import ModalLogin from "../../views/Auth/ModalLogin";
import "./Header.scss";
import { NavDropdown } from "react-bootstrap";
import HeaderLogo from "../../assets/images/header-logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../views/Auth/userSlice";
import { toast } from "react-toastify";
import { cartItemsCountSelector } from "../../views/Cart/selector";
const Header = () => {
  const [show, setShow] = useState(false);

  const countCart = useSelector(cartItemsCountSelector);
  const user = useSelector((state) => state.user.current);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const logoutuser = () => {
    dispatch(logout());
  };
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
                <span>{countCart}</span>
              </div>
              <p>Giỏ hàng</p>
            </Link>
            {user ? (
              <NavDropdown
                title={
                  <>
                    <i className="fa-solid fa-circle-user fs-3 text-light"></i>
                  </>
                }
                className="col-12 col-lg-2 col-md-2 col-sm-12"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="text-dark bg-warning" disabled>
                  Xin chào
                  <span className="text-primary">
                    {" "}
                    {" '" + user.name + "'"}
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  className="text-success"
                  to="/user/order"
                >
                  Đơn hàng của bạn
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/user">
                  Thông tin cá nhân
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/user/local">
                  Địa chỉ giao hàng
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => toast.warning("Tính năng đang phất triển")}
                >
                  Language
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item onClick={logoutuser}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link
                className="col-12 col-lg-2 col-md-2 col-sm-12"
                onClick={handleShow}
              >
                {/* <i className="fa-solid fa-circle-user "></i> */}
                <i className="fa-solid fa-arrow-right-to-bracket fs-3 text-light"></i>
              </Link>
            )}
          </div>
        </div>
      </header>
      <ModalLogin show={show} modalClose={handleClose} />
      <Navigate />
    </>
  );
};
export default Header;

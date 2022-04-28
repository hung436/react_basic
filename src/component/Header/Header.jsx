import React, { useState } from "react";
import Navigate from "./component/Navigate";
import ModalLogin from "../../views/Auth/ModalLogin";
import "./Header.scss";
import { NavDropdown } from "react-bootstrap";
import HeaderLogo from "../../assets/images/header-logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout, openModal, closeModal } from "../../views/Auth/userSlice";
import { toast } from "react-toastify";
import { cartItemsCountSelector } from "../../views/Cart/selector";
const Header = () => {
  const countCart = useSelector(cartItemsCountSelector);
  const user = useSelector((state) => state.user.current);
  const modal = useSelector((state) => state.user.modalIsOpen);
  const handleClose = () => {
    const action = closeModal();
    dispatch(action);
  };
  const handleShow = () => {
    const action = openModal();
    dispatch(action);
  };
  const dispatch = useDispatch();
  const logoutuser = () => {
    dispatch(logout());
  };
  return (
    <>
      <header className="sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div id="h_logo" className="col-12 col-lg-3 col-md-3 col-sm-12">
              <Link to="/">
                <img src={HeaderLogo} alt="logo" className="img-responsive" />
              </Link>
            </div>
            <div
              id="h_search"
              className="mt-2 col-12 col-lg-5 col-md-5 col-sm-12 "
            >
              <input
                type="search"
                placeholder="Nhập tên sản phẩm"
                className="form-control"
              />
              <div className="btn btn-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div
              className="col-12 col-lg-2 col-md-2 col-sm-12 d-none d-md-flex mt-2"
              id="h_cart"
            >
              <Link to="/cart">
                <div>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>{countCart}</span>
                </div>

                <p>Giỏ hàng</p>
              </Link>
            </div>

            {user ? (
              <NavDropdown
                title={
                  <>
                    <i className="fa-solid fa-circle-user fs-3 text-light"></i>
                  </>
                }
                className="col-12 col-lg-2 col-md-2 col-sm-12 d-none d-md-block"
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
              <div
                className="col-12 col-lg-2 col-md-2 col-sm-12 d-none d-md-block"
                onClick={handleShow}
              >
                {/* <i className="fa-solid fa-circle-user "></i> */}
                <Link>
                  <i className="fa-solid fa-arrow-right-to-bracket fs-3 text-light"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <ModalLogin show={modal} modalClose={handleClose} />
      <Navigate />
    </>
  );
};
export default Header;

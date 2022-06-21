import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { adminLogout } from "../adminSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function HeaderAD(props) {
  const dispatch = useDispatch();
  const [Active, setActive] = useState(0);
  const handleLogout = () => {
    dispatch(adminLogout());
  };
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        sticky="top"
        className="d-md-none"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Trang chủ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link
                active={Active === 0}
                as={Link}
                to="/admin"
                onClick={() => {
                  setActive(0);
                  props.reload();
                }}
              >
                Dashboard
              </Nav.Link>

              <Nav.Link
                active={Active === 1}
                as={Link}
                to="/admin/category"
                onClick={() => {
                  setActive(1);
                  props.reload();
                }}
              >
                Danh mục
              </Nav.Link>
              <Nav.Link
                active={Active === 2}
                as={Link}
                to="/admin/product"
                onClick={() => {
                  setActive(2);
                  props.reload();
                }}
              >
                Sản phẩm
              </Nav.Link>
              <Nav.Link
                active={Active === 3}
                as={Link}
                to="/admin/order"
                onClick={() => {
                  setActive(3);
                  props.reload();
                }}
              >
                Đơn hàng
              </Nav.Link>
              <Nav.Link
                as={Link}
                active={Active === 4}
                to="/admin/user"
                onClick={() => {
                  setActive(4);
                  props.reload();
                }}
              >
                Người dùng
              </Nav.Link>
            </Nav>

            <NavDropdown
              title={
                <i className="fa-solid fa-circle-user fs-3 text-light"></i>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Thông tin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cài đặt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

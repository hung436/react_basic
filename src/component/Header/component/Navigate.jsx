import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigate() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-center"
          >
            <Nav className="d-flex justify-content-center"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Sản phẩm
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Giỏ hàng
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Về chúng tôi
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

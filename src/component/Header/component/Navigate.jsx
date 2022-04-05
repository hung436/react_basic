import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#product">Sản phẩm</Nav.Link>
              <Nav.Link href="#cart">Giỏ hàng</Nav.Link>
              <Nav.Link href="#about">Về chúng tôi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

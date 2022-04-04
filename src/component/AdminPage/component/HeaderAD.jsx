import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {adminLogout} from './adminSlice'
import {useDispatch} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
export default function HeaderAD(props) {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(adminLogout())
  }
  return (
    <div>
 
 <Navbar bg="primary" variant='dark' expand="lg" sticky="top">
  <Container>
    <Navbar.Brand as={Link} to="/">Trang chủ</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="me-auto">
       
            <Nav.Link as={Link} to="/admin"  onClick={() => {
            props.reload();
          }}> Dashboard</Nav.Link>

         <Nav.Link as={Link} to="/admin/category"  onClick={() => {
            props.reload();
          }}> Danh mục</Nav.Link>
         <Nav.Link as={Link} to="/admin/product"  onClick={() => {
            props.reload();
          }}>Sản phẩm</Nav.Link>
        <Nav.Link as={Link} to="/admin/user"  onClick={() => {
            props.reload();
          }}> Người dùng</Nav.Link>
     
      </Nav>
     
      <NavDropdown title={ <i className="fa-solid fa-circle-user fs-3 text-light"></i>} id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Thông tin</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cài đặt</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

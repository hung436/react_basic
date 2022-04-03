import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {adminLogout} from './adminSlice'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
export default function HeaderAD(props) {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(adminLogout())
  }
  return (
    <div>
 
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><NavLink to="/">Trang chủ</NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       
            <NavLink to="/admin"  onClick={() => {
            props.reload();
          }}> Dashboard</NavLink>

         <NavLink to="/admin/category"  onClick={() => {
            props.reload();
          }}> Danh mục</NavLink>
         <NavLink to="/admin/product"  onClick={() => {
            props.reload();
          }}>Sản phẩm</NavLink>
        <NavLink to="/admin/user"  onClick={() => {
            props.reload();
          }}> Người dùng</NavLink>
<button className="btn btn-primary" onClick={handleLogout}>Dang xuat</button>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

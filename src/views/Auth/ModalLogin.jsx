import React from 'react';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { createNewUser } from '../../services/apiService';
function ModalLogin(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const action = login(values);
    let data = await dispatch(action);
    data = await unwrapResult(data);
    if (data.error === 0) {
      toast.success('Đặng nhập thành công!');
      props.modalClose();
    } else {
      toast.warning(data.message);
    }
  };
  const handleCreateUser = async (values) => {
    let res = await createNewUser(values);
    if (res.errorCode === 0) {
      toast.success('Đặng kí thành công!');
      props.modalClose();
    } else {
      toast.warning(res.message);
    }
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập / Đăng kí</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="login"
            // id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="login" title="Đăng Nhập ">
              <Login onSubmit={handleSubmit} />
            </Tab>
            <Tab eventKey="register" title="Đăng kí">
              <Register onSubmit={handleCreateUser} />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalLogin;

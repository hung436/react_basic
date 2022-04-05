import React, { useEffect, useState, useCallback } from "react";
import { getAllUsers } from "../../../services/apiService";
import { Table, Button } from "react-bootstrap";
import ModalUser from "./ModalUser";
export default function User(props) {
  const [modalShow, setModalShow] = useState(false);
  const [use, setuse] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchapi = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllUsers();
      // mapData(res.data);
      setuse(res);
    } catch (error) {
      //   toast.error('Error');
      //   dispatch(adminLogout());
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchapi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.refresh]);

  return (
    <div className="container">
      <h1 className="text-center">QUẢN LÝ NGƯỜI DÙNG</h1>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Thêm
      </Button>
      <ModalUser show={modalShow} onHide={() => setModalShow(false)} />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Number Phone</th>
          </tr>
        </thead>
        <tbody>
          {use.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.numberphone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

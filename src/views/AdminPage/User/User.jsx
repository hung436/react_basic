import React, { useEffect, useState, useCallback } from "react";
import { getAllUsers, deleteUser } from "../../../services/apiService";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import ModalUser from "./ModalUser";
import ModalUserUpdate from "./ModalUserUpdate";
export default function User(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowUD, setModalShowUD] = useState(false);
  const [ID, setID] = useState({});
  const [use, setuse] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchapi = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllUsers("ALL");
      // mapData(res.data);
      setuse(res.users);
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
  }, [use]);
  const DeleteItem = (id) => {
    if (window.confirm("Delete the item?")) {
      let res = deleteUser(id);
    }
  };
  const updateUser = (user) => {
    setModalShowUD(true);
    setID(user);
  };
  return (
    <div className="w-100">
      <h1 className="text-center">QUẢN LÝ NGƯỜI DÙNG</h1>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Thêm
      </Button>
      <ModalUser show={modalShow} onHide={() => setModalShow(false)} />
      <ModalUserUpdate
        show={modalShowUD}
        id={ID}
        onHide={() => setModalShowUD(false)}
      />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>

            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Number Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {use.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>

                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.numberphone}</td>
                <td>
                  <ButtonGroup>
                    <Button variant="primary" onClick={() => updateUser(item)}>
                      Sửa
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => DeleteItem(item.id)}
                    >
                      Xóa
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

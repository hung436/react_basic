import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  ButtonGroup,
  Pagination,
  Row,
  Form,
} from "react-bootstrap";
// import ModalProduct from "./ModalProduct";
// import ModalProductUD from "./ModalProductUD";
import { useDispatch } from "react-redux";
import {
  createProduct,
  getAllOrder,
  deleteProduct,
  updateProduct,
} from "../../../services/productService";
import { adminLogout } from "../adminSlice";
import { convertFromHTML, ContentState } from "draft-js";
import { EditorState } from "draft-js";
import { toast } from "react-toastify";
export default function Order(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowUD, setModalShowUD] = useState(false);
  const [ID, setID] = useState({});
  const [Order, serOrder] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [Page, setPage] = useState(0);
  const [Count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleSubmit = async (formData) => {
    try {
      const res = await createProduct(formData);

      if (res.errorCode === 0) {
        toast.success("Thêm sản phẩm thành công!");
      } else if (res.errorCode === 1) {
        toast.warning(res.message);
      }
    } catch (err) {
      toast.error("Error");
    }
  };
  const handleUpdate = async (formData) => {
    try {
      const res = await updateProduct(formData);

      if (res.errorCode === 0) {
        toast.success("Sửa sản phẩm thành công!");
      }
    } catch (err) {
      toast.error("Error");
    }
  };
  const handleChange = (value) => {
    alert(value.target.value);
  };
  useEffect(() => {
    let fetchapi = async () => {
      try {
        const res = await getAllOrder(Page);
        // mapData(res.data);
        serOrder(res.data.rows);
        setCount(res.data.count);
      } catch (error) {
        toast.error("Error");
        dispatch(adminLogout());
      } finally {
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    fetchapi();
  });

  let items = [];
  for (let number = 1; number <= Math.ceil(Count / 5); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Page + 1}
        onClick={async () => {
          await setPage(number - 1);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="px-2">
      <Button variant="success" onClick={() => setModalShow(true)}>
        Thêm sản phẩm
      </Button>

      <div style={{ height: "70vh" }}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>UserID</th>
              <th>Phương thức thanh toán</th>
              <th>Tổng đơn hàng</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th>Ngày đặt hàng</th>
            </tr>
          </thead>
          <tbody>
            {Order.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{p.id}</td>
                  <td>{p.userId}</td>
                  <td>{p.payment_method}</td>
                  <td>{p.price}</td>
                  <td>{p.address_id}</td>
                  <td>
                    <Form.Select
                      size="sm"
                      value={p.status}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="1">Chờ xác nhận</option>
                      <option value="2">Đang giao</option>
                      <option value="3">Đã giao</option>
                    </Form.Select>
                  </td>
                  <td>{p.createdAt}</td>

                  {/* <td>
                    <ButtonGroup>
                      <button
                        className="btn btn-warning"
                        // onClick={() => updateProducts(p)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        // onClick={() => deleteProducts(p.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </ButtonGroup>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row>
        <div className="justify-content-center text-center">
          <Pagination>{items}</Pagination>
        </div>
      </Row>
    </div>
  );
}

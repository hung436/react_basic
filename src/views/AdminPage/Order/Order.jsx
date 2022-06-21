import React, { useState, useEffect, useRef } from "react";
import { Table, Pagination, Row, Form } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { useDispatch } from "react-redux";
import { getAllOrder, changeOrder } from "../../../services/productService";
import { adminLogout } from "../adminSlice";

import { ComponentToPrint } from "./ComponentToPrint";
import { toast } from "react-toastify";
export default function Order(props) {
  const [Order, serOrder] = useState([]);

  const [Page, setPage] = useState(0);
  const [Count, setCount] = useState(0);
  const [status, setStatus] = useState(1);
  const dispatch = useDispatch();
  const componentRef = useRef();
  const handleChange = async (status, id) => {
    let res = await changeOrder(id, status.target.value);
    setStatus(status.target.value);
    if (res && res.errorCode === 1) {
      toast.success(res.message);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await getAllOrder(Page);
        // mapData(res.data);
        serOrder(res.data.rows);
        setStatus(res.data.rows.status);
        setCount(res.data.count);
      } catch (error) {
        toast.error("Error");
        dispatch(adminLogout());
      } finally {
      }
    })();
  }, [Page, status, dispatch]);

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
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
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
                      onChange={(e) => handleChange(e, p.id)}
                    >
                      <option
                        value="1"
                        hidden={p.status >= 1}
                        disabled={p.status === 1}
                      >
                        Chờ xác nhận
                      </option>
                      <option
                        value="2"
                        hidden={p.status >= 2}
                        disabled={p.status === 2}
                      >
                        Đang giao
                      </option>
                      <option
                        value="3"
                        hidden={p.status === 1 || p.status === 3}
                      >
                        Đã giao
                      </option>
                    </Form.Select>
                  </td>
                  <td>{p.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row>
        <div className="d-flex justify-content-end ">
          <Pagination>{items}</Pagination>
        </div>
      </Row>
    </div>
  );
}

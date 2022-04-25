import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalOrder from "./ModalOrder";
import { getOrderDetail } from "../../services/userService";
export default function OrderItem(props) {
  const { item } = props;

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const onHide = () => {
    setShow(false);
  };
  const showChiTiet = async () => {
    try {
      const res = await getOrderDetail(item.id);
      if (res.errorCode === 0) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
    setShow(true);
  };
  return (
    <>
      <hr className="" />
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-1 col-lg-1 col-xl-1">{item.id}</div>
        <div className="col-md-2 col-lg-2 col-xl-2">{item.createdAt}</div>
        <div className="col-md-3 col-lg-3 col-xl-2 ">
          {item.address.street_name +
            " " +
            item.address.ward +
            " " +
            item.address.district +
            " " +
            item.address.city}
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 ">{item.price}</div>
        <div className="col-md-3 col-lg-3 col-xl-2 ">
          {item.status === 1
            ? "Chờ xác nhận"
            : item.status === 2
            ? "Đang giao hàng"
            : "Đã giao hàng"}
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 ">
          <Link onClick={showChiTiet}> Xem chi tiết</Link>
        </div>
      </div>
      <ModalOrder show={show} onHide={onHide} data={data} />
    </>
  );
}

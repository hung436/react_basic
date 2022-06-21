import React, { useState } from 'react';

import ModalOrder from './ModalOrder';
import { getOrderDetail } from '../../services/userService';
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
      <hr className="mt-0" />
      <div className="row mb-4  align-items-center flex-row flex-nowrap">
        <div className="col-1">{item.id}</div>
        <div className="col-2 ">{item.createdAt}</div>
        <div className="col-2  ">{item.address}</div>
        <div className="col-2 ">{item.price}</div>
        <div className="col-3">
          {item.status === 1
            ? 'Chờ xác nhận'
            : item.status === 2
            ? 'Đang giao hàng'
            : 'Đã giao hàng'}
        </div>
        <div className="col-2 ">
          <div
            onClick={showChiTiet}
            className="text-primary text-decoration-underline fst-italic "
            style={{ cursor: 'pointer' }}
          >
            Xem chi tiết
          </div>
        </div>
      </div>
      <ModalOrder show={show} onHide={onHide} data={data} />
    </>
  );
}

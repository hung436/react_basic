import React from 'react';
import { Modal } from 'react-bootstrap';
// import { getOrderDetail } from "../../services/userService";
import { Link } from 'react-router-dom';
export default function ModalOrder(props) {
  const { show, onHide, data } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        fullscreen="sm"
        centered
        aria-labelledby="modalorder"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modalorder">Chi tiết đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-between align-items-center bg-warning">
            <div className="col-md-1 col-lg-1 col-xl-1">ID sản phẩm</div>
            <div className="col-md-2 col-lg-2 col-xl-2">Hình ảnh</div>
            <div className="col-md-3 col-lg-3 col-xl-2 ">Số lượng</div>
            <div className="col-md-2 col-lg-2 col-xl-2 ">Giá tiền</div>
          </div>
          {data.map((item, index) => {
            return (
              <div div key={index}>
                <hr />
                <div className="row mb-4 d-flex justify-content-between align-items-center">
                  <div className="col-md-1 col-lg-1 col-xl-1">
                    {item.product.id}
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <Link to={`/product/${item.product.id}`}>
                      <img
                        className="img-thumbnail"
                        src={
                          process.env.REACT_APP_BACKEND_URL +
                          '/uploads/' +
                          item.product.image_link
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 ">
                    {item.quality}
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 ">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

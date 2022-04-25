import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import OrderItem from "./OrderItem";
import { getOrders } from "../../services/userService";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
const queryString = require("query-string");
export default function Order() {
  const location = useLocation();
  const history = useHistory();
  const [pagination, setPagination] = useState({});
  const [orderItem, setorderItem] = useState([]);
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
    };
  }, [location.search]);
  const fetchapi = useCallback();
  useEffect(() => {
    (async function () {
      try {
        const res = await getOrders();
        console.log(res);
        setorderItem(res.data);
        // rs.data && formatData(rs.data);
        // setPagination(rs.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handlePageClick = (e) => {
    // const currentPage = e.selected + 1;
    // const filters = {
    //   ...queryParams,
    //   page: currentPage,
    // };
    // history.push({
    //   pathname: history.location.pathname,
    //   search: queryString.stringify(filters),
    // });
  };
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold mb-0 text-black"> ĐƠN HÀNG</h1>
      </div>
      <div>
        <hr className="" />
        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-md-1 col-lg-1 col-xl-1">Mã đơn hàng</div>
          <div className="col-md-2 col-lg-2 col-xl-2">Ngày Mua</div>
          <div className="col-md-3 col-lg-3 col-xl-2 ">Địa Chỉ Giao Hàng</div>
          <div className="col-md-2 col-lg-2 col-xl-2 ">Tổng Tiền</div>
          <div className="col-md-3 col-lg-3 col-xl-2 ">Trạng Thái</div>
          <div className="col-md-3 col-lg-3 col-xl-2 ">Chi tiết</div>
        </div>
      </div>
      {orderItem &&
        orderItem.map((item, idx) => <OrderItem item={item} key={idx} />)}
      <hr className="my-4" />
      <Pagination
        currentPage={1}
        totalSize={20}
        sizePerPage={5}
        changeCurrentPage={handlePageClick}
        theme="bootstrap"
      />
      <div className="pt-5">
        <h6 className="mb-0">
          <Link to="/" className="text-body">
            <i className="fas fa-long-arrow-alt-left me-2" />
            Trở về trang chủ
          </Link>
        </h6>
      </div>
    </div>
  );
}

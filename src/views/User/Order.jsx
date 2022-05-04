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
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({});
  const [orderItem, setorderItem] = useState([]);
  const [total, setTotal] = useState(0);
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
    };
  }, [location.search]);

  useEffect(() => {
    (async function () {
      try {
        const res = await getOrders(page);
        setorderItem(res.data.rows);
        setTotal(res.data.count);
        // rs.data && formatData(rs.data);
        // setPagination(rs.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  const handlePageClick = (numberPage) => {
    setPage(numberPage - 1);
  };
  return (
    <div className="">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-0 text-black"> ĐƠN HÀNG</h1>
      </div>
      <div className="bg-primary text-light">
        <hr className="" />
        <div className="row d-flex justify-content-between align-items-center flex-row flex-nowrap ">
          <div className="col-1">Mã</div>
          <div className=" col-2">Ngày Mua</div>
          <div className=" col-2 ">Địa Chỉ Giao Hàng</div>
          <div className="col-2 ">Tổng Tiền</div>
          <div className="col-3 ">Trạng Thái</div>
          <div className="col-2  ">Chi tiết</div>
        </div>
      </div>
      {orderItem &&
        orderItem.map((item, idx) => <OrderItem item={item} key={idx} />)}
      <hr className="mb-4" />
      <div className="d-flex justify-content-center align-items-center">
        <Pagination
          currentPage={page + 1}
          totalSize={total}
          sizePerPage={5}
          changeCurrentPage={handlePageClick}
          theme="bootstrap"
          showFirstLastPages
        />
      </div>

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

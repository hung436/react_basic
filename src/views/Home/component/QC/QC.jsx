import React from "react";
import transactionIcon from "../../../../assets/images/Untitled.svg";
import gitfIcon from "../../../../assets/images/gift-green-icon.svg";
import presentIcon from "../../../../assets/images/percent-green-icon.svg";
import expressIcon from "../../../../assets/images/delivery-green-icon.svg";
import "./QC.scss";
export default function QC() {
  return (
    <div className="row" id="container">
      <div className="col-md-6 col-sm-6 col-6 bg-light text-center">
        <div className=" align-center d-flex justify-content-center ">
          <img className="img-fluid" src={presentIcon} alt="" />
        </div>
        <p>Sản phẩm chính hãng</p>
      </div>
      <div className="col-md-6 col-sm-6 col-6 bg-light text-center">
        <div className=" align-center d-flex justify-content-center ">
          <img className="img-fluid" src={expressIcon} alt="" />
        </div>
        <p>Giao hàng toàn quốc</p>
      </div>
      <div className="col-md-6 col-sm-6 col-6 bg-light text-center">
        <div className=" align-center d-flex justify-content-center ">
          <img className="img-fluid" src={gitfIcon} alt="" />
        </div>
        <p>Tích điểm đổi quà</p>
      </div>
      <div className="col-md-6 col-sm-6 col-6 bg-light text-center">
        <div className=" align-center d-flex justify-content-center ">
          <img className="img-card" src={transactionIcon} alt="" />
        </div>
        <p>Thanh toán linh hoạt</p>
      </div>
    </div>
  );
}

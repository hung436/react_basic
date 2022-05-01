import React from "react";
import emtyImage from "../../../assets/images/278865972_335169742037557_7440287238387146549_n.png";
export default function CartEmpty() {
  return (
    <div
      style={{ height: "70vh" }}
      className="d-flex justify-content-center align-center text-center"
    >
      <img src={emtyImage} alt="" />
    </div>
  );
}

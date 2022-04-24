import React from "react";
import UserLocal from "../../User/UserLocal";
export default function CartConfirm() {
  return (
    <div>
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-bold mb-0 text-black">Xác nhận thông tin</h1>
        </div>
        <UserLocal />
      </div>
    </div>
  );
}

import React from "react";
import "./quantity.scss";
function Quantity({ count, onChange }) {
  const countInt = parseInt(count);
  return (
    <>
      <button
        className="btn btn-link px-2"
        disabled={countInt <= 1 ? true : false}
        onClick={() => {
          onChange(countInt - 1);
        }}
      >
        <i className="fas fa-minus" />
      </button>
      <input
        className="form-control form-control-sm"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (value <= 0 || !value) return onChange(countInt);
          return onChange(value);
        }}
        type="number"
        value={countInt}
      />
      <button
        className="btn btn-link px-2"
        onClick={() => {
          onChange(countInt + 1);
        }}
      >
        <i className="fas fa-plus" />
      </button>
    </>
  );
}

export default Quantity;

import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
export default function FillProduct(props) {
  const handleClick = (action) => {
    props.handleClick(action);
  };
  return (
    <div className="d-flex bg-light p-4">
      <div className="d-flex align-center mt-2">Sắp xếp :</div>
      <ButtonGroup aria-label="Basic example" c>
        <Button
          variant="light"
          className="border-primary"
          onClick={() => handleClick("min")}
        >
          Giá thấp đến cao
        </Button>
        <Button
          variant="light"
          className="border-primary"
          onClick={() => handleClick("max")}
        >
          Giá cao đến thấp
        </Button>
        <Button
          variant="light"
          className="border-primary"
          onClick={() => handleClick("free")}
        >
          Khuyến mãi
        </Button>
      </ButtonGroup>
    </div>
  );
}

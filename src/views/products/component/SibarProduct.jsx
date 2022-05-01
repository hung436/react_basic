import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getCategory } from "../../../services/cateService";
export default function SibarProduct(props) {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("ALL");
  useEffect(() => {
    (async function () {
      try {
        let res = await getCategory();
        setCategory(res.data);
      } catch (error) {}
    })();
  }, []);
  const handleClick = (action) => {
    props.handleClick(action);
  };
  return (
    <div className="bg-light p-4">
      <h3>DANH MỤC</h3>
      <ListGroup.Item
        active={active === "ALL"}
        variant="light"
        onClick={() => {
          handleClick("ALL");
          setActive("ALL");
        }}
      >
        Tất cả
      </ListGroup.Item>
      <ListGroup>
        {category.map((item, index) => {
          return (
            <ListGroup.Item
              key={index}
              active={active === index}
              variant="light"
              onClick={() => {
                handleClick(item.id);
                setActive(index);
              }}
            >
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

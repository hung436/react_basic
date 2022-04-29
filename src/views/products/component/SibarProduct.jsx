import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getCategory } from "../../../services/cateService";
export default function SibarProduct(props) {
  const [category, setCategory] = useState([]);
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
      <ListGroup>
        {category.map((item, index) => {
          return (
            <ListGroup.Item
              action
              variant="light"
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

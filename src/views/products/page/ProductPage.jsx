import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import AsNavFor from '../../Home/component/Sliders/Sliders';
import FillProduct from '../component/FillProduct';
import SibarProduct from '../component/SibarProduct';
import ProductList from '../component/ProductList';

import { getProductFill } from '../../../services/productService';

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [action, setAction] = useState('ALL');
  const [category, setCategory] = useState('ALL');

  useEffect(() => {
    const fetchapi = async () => {
      const res = await getProductFill(category, action);

      setData(res);
    };
    fetchapi();
  }, [action, category]);
  const handleClick = (action) => {
    setAction(action);
  };
  const handleClick2 = (action) => {
    setCategory(action);
  };
  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-4">
            <SibarProduct handleClick={handleClick2} />
          </div>
          <div className="col-sm-8">
            <AsNavFor />
          </div>
          <hr className="my-4" />
          <div className="col-sm-12">
            <FillProduct handleClick={handleClick} />
          </div>
          <div className="col-sm-12">
            <ProductList data={data} />
          </div>
        </Row>
      </Container>
    </>
  );
}

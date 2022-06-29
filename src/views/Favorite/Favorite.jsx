import React, { useEffect, useState } from 'react';
import { Table, ButtonGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  getAllFavorite,
  deteleFavoriteProduct,
} from '../../services/userService';
const Favorite = () => {
  const [Product, setProduct] = useState([]);
  const getFavorites = async () => {
    let res = await getAllFavorite();
    if (res.errorCode === 0) {
      setProduct(res.data);
      console.log(res.data);
    }
  };
  useEffect(() => {
    getFavorites();
  }, []);
  const deleteFavorite = async (id) => {
    try {
      const res = await deteleFavoriteProduct(id);
      if (res.errorCode === 0) {
        toast.success('Đã xóa yêu thích sản phẩm');
        getFavorites();
      }
    } catch (error) {}
  };
  return (
    <div className="container py-5">
      <div className="border border-danger border-2 p-4 text-center">
        {!Product.length > 0 ? (
          <h2 className="">Yêu thích trống</h2>
        ) : (
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>

                <th>Giá</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Product.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.product.id}</td>
                    <td className="">{item.product.name}</td>
                    <td>
                      <img
                        style={{ width: '50px' }}
                        src={
                          process.env.REACT_APP_BACKEND_URL +
                          '/uploads/' +
                          item.product.image_link
                        }
                        alt=""
                      />
                    </td>

                    <td>{item.product.price}</td>

                    <td>
                      <ButtonGroup>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteFavorite(item.product.id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </ButtonGroup>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Favorite;

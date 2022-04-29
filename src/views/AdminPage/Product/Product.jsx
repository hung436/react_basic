import React, { useState, useEffect } from "react";
import { Button, Table, ButtonGroup, Pagination, Row } from "react-bootstrap";
import ModalProduct from "./ModalProduct";
import ModalProductUD from "./ModalProductUD";
import {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../../../services/productService";
import { convertFromHTML, ContentState } from "draft-js";
import { EditorState } from "draft-js";
import { toast } from "react-toastify";
export default function Product(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowUD, setModalShowUD] = useState(false);
  const [ID, setID] = useState({});
  const [Product, setProduct] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [Page, setPage] = useState(0);
  const [Count, setCount] = useState(0);
  const handleSubmit = async (formData) => {
    try {
      const res = await createProduct(formData);

      if (res.errorCode === 0) {
        toast.success("Thêm sản phẩm thành công!");
      } else if (res.errorCode === 1) {
        toast.warning(res.message);
      }
    } catch (err) {
      toast.error("Error");
    }
  };
  const handleUpdate = async (formData) => {
    try {
      const res = await updateProduct(formData);

      if (res.errorCode === 0) {
        toast.success("Sửa sản phẩm thành công!");
      }
    } catch (err) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    let fetchapi = async () => {
      try {
        const res = await getProduct(Page);
        // mapData(res.data);
        setProduct(res.data.rows);
        setCount(res.data.count);
      } catch (error) {
        //   toast.error('Error');
        //   dispatch(adminLogout());
      } finally {
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    fetchapi();
  });

  const deleteProducts = (id) => {
    if (window.confirm("Delete the item?")) {
      deleteProduct(id);
      toast.success("Đã xóa sản phẩm thành công!");
    }
  };
  const convertText = (value) => {
    const blocksFromHTML = convertFromHTML(value);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(state);
  };
  const convert = (value) => {
    let plainString = value.replace(/<[^>]+>/g, "");

    return plainString;
  };
  const updateProducts = (product) => {
    setModalShowUD(true);
    setID(product);
    let res = convertText(product.descrition);
    setEditorState(res);
  };

  let items = [];
  for (let number = 1; number <= Math.ceil(Count / 5); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Page + 1}
        onClick={async () => {
          await setPage(number - 1);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="px-2">
      <Button variant="success" onClick={() => setModalShow(true)}>
        Thêm sản phẩm
      </Button>
      <ModalProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={handleSubmit}
      />
      <ModalProductUD
        show={modalShowUD}
        id={ID}
        onHide={() => setModalShowUD(false)}
        editor={editorState}
        onSubmit={handleUpdate}
      />
      <div style={{ height: "70vh" }}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Discount</th>
              <th>Nổi bật</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>
                    <img
                      style={{ width: "50px" }}
                      src={
                        process.env.REACT_APP_BACKEND_URL +
                        "/uploads/" +
                        p.image_link
                      }
                      alt=""
                    />
                  </td>
                  <td>{p.category.name}</td>
                  <td>{p.price}</td>
                  <td>{p.discount}</td>
                  <td>{p.highlight === 0 ? "Không" : "Có"}</td>

                  <td>
                    <ButtonGroup>
                      <button
                        className="btn btn-warning"
                        onClick={() => updateProducts(p)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProducts(p.id)}
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
      </div>
      <Row>
        <div className="justify-content-center text-center">
          <Pagination>{items}</Pagination>
        </div>
      </Row>
    </div>
  );
}

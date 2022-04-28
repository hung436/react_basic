import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { Modal, Button, Row, FloatingLabel, Form } from "react-bootstrap";
import FormData from "form-data";
import * as yup from "yup";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import { EditorState } from "draft-js";
import TextEditor from "../../../component/form-control/TextEditor";
export default function ModalProductUD(props) {
  const { id } = props;
  const imgRef = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [imgProduct, setImgProduct] = useState();
  const [errorImage, setErrorImage] = useState(null);
  const [isEditImg, setIsEditImg] = useState(false);
  const handleInputImgChange = () => {
    setIsEditImg(true);
    const file = imgRef.current.files[0];
    file.preview = URL.createObjectURL(file);
    setImgProduct(file);
  };
  useEffect(() => {
    const handle = () => {
      setImgProduct({
        preview:
          process.env.REACT_APP_BACKEND_URL + "/uploads/" + id.image_link,
      });
      setEditorState(props.editor);
    };
    return handle();
  }, [id]);
  useEffect(() => {
    return () => {
      imgProduct && URL.revokeObjectURL(imgProduct.preview);
    };
  }, [imgProduct]);
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("id", id.id);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append(
      "description",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    formData.append("category", values.category);
    formData.append("highlight", values.highlight);
    formData.append("discount", values.discount);
    if (isEditImg) {
      const file =
        imgRef.current && imgRef.current.files && imgRef.current.files[0];
      if (!file) {
        setErrorImage("Please enter product image");
        return;
      }
      formData.append("images", imgRef.current.files[0]);
    }
    props.onHide();
    props.onSubmit(formData);
    setEditorState(EditorState.createEmpty());
    imgRef.current.value = "";
    setImgProduct(null);
  };
  const initialValues = {
    category: id.cate_id,
    name: id.name,
    price: id.price,
    discount: id.discount,
    description: id.description,
    highlight: id.highlight,
  };

  const schema = yup.object().shape({});
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            SỬA SẢN PHẨM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <div>
              <Formik
                validationSchema={schema}
                onSubmit={(values) => handleSubmit(values)}
                initialValues={initialValues}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Danh mục"
                      className="mb-3"
                    >
                      <Form.Select
                        name="category"
                        aria-label="Default select example"
                        defaultValue={values.category}
                        onChange={handleChange}
                        isValid={touched.category && !errors.category}
                      >
                        <option>Chọn danh mục</option>
                        <option value="1">Điện thoại</option>
                        <option value="2">Laptop</option>
                      </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Tên sản phẩm"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Giá"
                      className="mb-3"
                    >
                      <Form.Control
                        type="number"
                        name="price"
                        placeholder="Giá"
                        value={values.price}
                        onChange={handleChange}
                        isValid={touched.price && !errors.price}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Discount"
                      className="mb-3"
                    >
                      <Form.Control
                        type="number"
                        name="discount"
                        placeholder="Discount"
                        value={values.discount}
                        onChange={handleChange}
                        isValid={touched.discount && !errors.discount}
                      />
                    </FloatingLabel>
                    <TextEditor
                      state={editorState}
                      onChange={(value) => setEditorState(value)}
                    />

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nổi bật"
                      className="mb-3 mt-3"
                    >
                      <Form.Select
                        defaultValue={values.highlight}
                        aria-label="Default select example"
                        name="highlight"
                        onChange={handleChange}
                        isValid={touched.highlight && !errors.highlight}
                      >
                        <option>Chọn nổi bật</option>
                        <option value="0">Không</option>
                        <option value="1">Có</option>
                      </Form.Select>
                    </FloatingLabel>

                    <Form.Control
                      type="file"
                      className="mb-3"
                      placeholder="Image"
                      value={values.file}
                      ref={imgRef}
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={handleInputImgChange}
                      isValid={touched.file && !errors.file}
                    />
                    {imgProduct && (
                      <img width={"25%"} src={imgProduct.preview} alt="" />
                    )}
                    {errorImage && (
                      <span
                        style={{
                          fontSize: "12px",
                          margin: "6px 0 0",
                          display: "block",
                          color: "#ff0000",
                        }}
                      >
                        {errorImage}
                      </span>
                    )}
                    <Modal.Footer>
                      <Button variant="success" type="submit">
                        Save
                      </Button>
                      <Button variant="danger" onClick={props.onHide}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Form>
                )}
              </Formik>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

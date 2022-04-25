import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button, Row, FloatingLabel, Form } from "react-bootstrap";
export default function LoginAdminform(props) {
  // const [inputValues, setInputValues] = useState({
  //   username: "",
  //   password: "",
  // });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Vui lòng nhập trường này"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Vui lòng nhập trường này"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const { onSubmit } = props;
  const handleSubmit = (values) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

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
            Đăng nhập ADMIN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <form onSubmit={formik.handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="UserName"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Ví dụ: ttldhung"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name="username"
                />
                {formik.errors.username && formik.touched.username && (
                  <p className="text-danger">{formik.errors.username}</p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-danger">{formik.errors.password}</p>
                )}
              </FloatingLabel>
              <Modal.Footer>
                <Button type="submit" variant="success">
                  Đăng nhập
                </Button>
              </Modal.Footer>
            </form>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

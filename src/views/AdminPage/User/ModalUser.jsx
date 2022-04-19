import React from "react";
import { createNewUser } from "../../../services/apiService";
import { Formik } from "formik";
import { Modal, Button, Row, FloatingLabel, Form } from "react-bootstrap";

import * as yup from "yup";

export default function ModalUser(props) {
  // const formik = useFormik({
  const handleSubmit = (values) => {
    createNewUser(values);
    props.onHide();
  };
  const initialValues = {
    username: "",
    password: "",
    confirm_password: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    numberphone: "",
  };
  // });
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().min(8, "Minimum 8 characters").required(),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password's not match")
      .required(),
    address: yup.string().required(),
    email: yup.string().email("Invalid email format").required(),
    numberphone: yup.number().min(10).required(),
  });
  return (
    <>
      <Modal
        {...props}
        dialogClassName="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tạo User mới
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
                      label="UserName"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="UserName"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nhập lại Password"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        name="confirm_password"
                        placeholder="confirm_password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        isValid={
                          touched.confirm_password && !errors.confirm_password
                        }
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="First Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={values.firstname}
                        name="firstname"
                        onChange={handleChange}
                        isValid={touched.firstname && !errors.firstname}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Last Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={values.lastname}
                        name="lastname"
                        onChange={handleChange}
                        isValid={touched.lastname && !errors.lastname}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Add"
                        value={values.address}
                        name="address"
                        onChange={handleChange}
                        isValid={touched.address && !errors.address}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="mb-3"
                      controlId="floatingPassword"
                      label="Email"
                    >
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="mb-3"
                      controlId="floatingPassword"
                      label="Phone Number"
                    >
                      <Form.Control
                        name="numberphone"
                        type="tel"
                        placeholder="Password"
                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                        value={values.numberphone}
                        onChange={handleChange}
                        isValid={touched.numberphone && !errors.numberphone}
                      />
                    </FloatingLabel>
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

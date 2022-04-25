import React, { useEffect, useState } from "react";
import { updateUser, getAllUsers } from "../../../services/apiService";
import { Formik } from "formik";
import { Modal, Button, Row, FloatingLabel, Form } from "react-bootstrap";
import * as yup from "yup";
import { toast } from "react-toastify";
export default function ModalUserUpdate(props) {
  // const formik = useFormik({
  const { id } = props;
  const handleSubmit = async (values) => {
    values = { ...values, id: id.id };

    let mes = await updateUser(values);

    if (mes.errCode === 0) {
      toast.success(mes.message);
      props.onHide();
    } else {
      toast.warning(mes.message);
    }
  };
  const initialValues = {
    username: id.username,
    password: id.password,
    firstname: id.firstname,
    lastname: id.lastname,
    email: id.email,
    address: id.address,
    numberphone: id.numberphone,
  };
  // });
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().min(8, "Minimum 8 characters").required(),
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
          <Modal.Title id="contained-modal-title-vcenter">SỬA USER</Modal.Title>
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
                    ></FloatingLabel>
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

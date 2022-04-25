import React, { useEffect, useState } from "react";

import * as yup from "yup";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Formik } from "formik";
export default function UserLocationForm(props) {
  const { onSubmit, address } = props;
  const [dc, setDc] = useState({});
  const schema = yup.object().shape({
    city: yup.string().required("Vui lòng điền vào đây"),
    ward: yup.string().required("Vui lòng điền vào đây"),
    street_name: yup.string().required("Vui lòng điền vào đây"),
    district: yup.string().required("Vui lòng điền vào đây"),
  });

  useEffect(() => {
    address && setDc(address);
  }, [address]);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
    if (!onSubmit) return;
    onSubmit(values);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Vui lòng vào Thông tin tài khoản để sửa
    </Tooltip>
  );
  return (
    <div>
      <Formik
        enableReinitialize={true}
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
        initialValues={{
          firstname: dc.firstname,
          lastname: dc.lastname,
          ward: dc.ward,
          street_name: dc.street_name,
          district: dc.district,
          city: dc.city,
          email: dc.email,
          numberphone: dc.numberphone,
        }}
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
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    disabled
                  />
                </OverlayTrigger>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    disabled
                  />
                </OverlayTrigger>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      disabled
                    />
                  </OverlayTrigger>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Số ĐT</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Số ĐT"
                  name="numberphone"
                  value={values.numberphone}
                  onChange={handleChange}
                  isInvalid={!!errors.numberphone}
                  disabled
                />

                <Form.Control.Feedback type="invalid">
                  {errors.numberphone}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationFormik03">
                <Form.Label>Thành phố/Tỉnh</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Thành phố/Tỉnh"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik03">
                <Form.Label>Quận/Huyện</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Quận/Huyện"
                  name="district"
                  value={values.district}
                  onChange={handleChange}
                  isInvalid={!!errors.district}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.district}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Phường/Xã</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phường/Xã"
                  name="ward"
                  value={values.ward}
                  onChange={handleChange}
                  isInvalid={!!errors.ward}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ward}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Số nhà/đường</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Số nhà/đường"
                  name="street_name"
                  value={values.street_name}
                  onChange={handleChange}
                  isInvalid={!!errors.street_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.street_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit">CẬP NHẬT THAY ĐỔI</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

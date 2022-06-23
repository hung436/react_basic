import React from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
export default function UserInfo() {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        // validationSchema={schema}
        // onSubmit={(values) => handleSubmit(values)}
        initialValues={
          {
            // firstname: addressItem.firstname,
            // lastname: addressItem.lastname,
            // ward: addressItem.ward,
            // street_name: addressItem.street_name,
            // district: addressItem.district,
            // city: addressItem.city,
            // email: addressItem.email,
            // numberphone: addressItem.numberphone,
          }
        }
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

                <Form.Control
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  disabled
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>

                <Form.Control
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  disabled
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>

                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    disabled
                  />
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

            <Button type="submit">CẬP NHẬT THAY ĐỔI</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

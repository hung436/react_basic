import React, { useState } from 'react';
import './Register.scss';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Register(props) {
  const [click, secClick] = useState(false);
  let handleClick = () => {
    secClick(!click);
  };

  const [click1, secClick1] = useState(false);
  let handleClick1 = () => {
    secClick1(!click1);
  };

  const formik = useFormik({
    initialValues: {
      lastname: '',
      firstname: '',
      username: '',
      password: '',
      passwordagain: '',
    },
    validationSchema: Yup.object({
      lastname: Yup.string().required('Vui lòng nhập trường này'),
      firstname: Yup.string().required('Vui lòng nhập trường này'),
      username: Yup.string().required('Vui lòng nhập trường này'),
      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('Vui lòng nhập trường này'),
      passwordagain: Yup.string()
        .min(6, 'Minimum 6 characters')
        .oneOf([Yup.ref('password')], 'Password not found')
        .required('Vui lòng nhập trường này'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const { onSubmit } = props;
  const handleSubmit = (values) => {
    console.log(values);
    if (!onSubmit) return;

    onSubmit(values);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* LAST NAME - FIRST  */}

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          name="lastname"
        />
        {formik.errors.lastname && formik.touched.lastname && (
          <p className="text-danger">{formik.errors.lastname}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fistname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          name="firstname"
        />
        {formik.errors.firstname && formik.touched.firstname && (
          <p className="text-danger">{formik.errors.firstname}</p>
        )}
      </Form.Group>

      {/* LAST NAME - FIRST  */}

      {/* User name  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
        />
        {formik.errors.username && formik.touched.username && (
          <p className="text-danger">{formik.errors.username}</p>
        )}
      </Form.Group>

      {/* User name  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          // type="Password"
          type={click ? 'password' : 'text'}
          placeholder="Password"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
        />
        <div className="eye" onClick={handleClick}>
          <i
            className={click ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
          ></i>
        </div>
        {formik.errors.password && formik.touched.password && (
          <p className="text-danger">{formik.errors.password}</p>
        )}
      </Form.Group>

      {/*NHAP LAI MAT KHAU*/}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter password again</Form.Label>
        <Form.Control
          // type="Password"
          type={click1 ? 'password' : 'text'}
          placeholder="Enter password again"
          onChange={formik.handleChange}
          name="passwordagain"
          value={formik.values.passwordagain}
        />
        <div className="eye" onClick={handleClick1}>
          <i
            className={click1 ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
          ></i>
        </div>
        {formik.errors.passwordagain && formik.touched.passwordagain && (
          <p className="text-danger">{formik.errors.passwordagain}</p>
        )}
      </Form.Group>
      {/*NHAP LAI MAT KHAU*/}

      {/* DIEU KHOAN*/}
      <Form.Group className="mb-3">
        <Form.Check
          required
          name="terms"
          label="Agree to terms and conditions"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.terms}
          feedback={formik.errors.terms}
          feedbackType="invalid"
          id="validationFormik0"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Đăng kí
      </Button>
    </Form>
  );
}

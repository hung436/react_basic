import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login(props) {
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
    // console.log("onSubmit", valu);
    onSubmit(values);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="Password"
          placeholder="Password"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-danger">{formik.errors.password}</p>
        )}
      </Form.Group>
      <Button type="submit" variant="primary">
        Đăng nhập
      </Button>
    </Form>
  );
}

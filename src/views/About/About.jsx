import React from 'react';
import { Container, Form, FloatingLabel, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';
export default function About() {
  return (
    <Container className="bg-light my-4">
      <Row>
        <div className="col-md-6 my-4">
          <h3> HTN XIN HÂN HẠNH ĐƯỢC HỖ TRỢ QUÝ KHÁCH</h3>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Nội dung (xin quý khách mô tả chi tiết)"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
              placeholder="Nội dung (xin quý khách mô tả chi tiết)"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Họ và Tên quý khách"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Họ và Tên quý khách" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Nhập số ĐT (khi cần NTH sễ gọi lại)"
            className="mb-3"
          >
            <Form.Control
              type="tell"
              placeholder="Nhập số ĐT (khi cần NTH sễ gọi lại)"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Email của quý khách"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email của quý khách" />
          </FloatingLabel>
          <button className="btn btn-danger w-100">Gửi góp ý</button>
        </div>
        <div className="col-md-6">
          <h4>THÔNG TIN CÔNG TY</h4>
          <p>
            CÔNG TY TNHH 3TV TNH
            <br /> Trụ sở chính: 128, Trần Quang Khải, P. Tân Định, Q.1, TP.HCM
            <br />
            Địa chỉ liên hệ: Trường ĐH Giao thông vận tải TPHCM
            <br /> Email:{' '}
            <a href={'https://lienhe@ut.edu.vn'}>lienhe@ut.edu.vn</a>
          </p>
          <div className="d-flex justify-content-center">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4660.614228761399!2d106.71451008802325!3d10.804127773626071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb22197%3A0x755bb0f39a48d4a6!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaSBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1651387755116!5m2!1svi!2s"
              width="400"
              height="300"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
        </div>
      </Row>
    </Container>
  );
}

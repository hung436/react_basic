import React from 'react'
import {Modal,Button,Row,FloatingLabel,Form} from 'react-bootstrap'
export default function ModalUser(props) {
    let handleClick=(p)=>{

    }
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
       Tạo User mới
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Row className="mb-3">
    
        <div>
        <FloatingLabel
    controlId="floatingInput"
    label="UserName"
    className="mb-3"
  >
      
    <Form.Control type="text" placeholder="Ví dụ: ttldhung" />
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
  >
      
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="First Name"
    className="mb-3"
  >
      
    <Form.Control type="text" placeholder="First Name" />
  </FloatingLabel>
        <FloatingLabel
    controlId="floatingInput"
    label="Address"
    className="mb-3"
  >
      
    <Form.Control type="text" placeholder="Add" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Email">
    <Form.Control type="email" placeholder="Email" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Phone Number">
    <Form.Control type="tel" placeholder="Password" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" />
  </FloatingLabel>
        </div>
    </Row>
    </Modal.Body>
    <Modal.Footer>
    <Button variant ="success" onClick={(props)=>handleClick(props)}>Save</Button>
      <Button variant="danger" onClick={props.onHide}>Close</Button>
     
    </Modal.Footer>
  </Modal>
  </>
  )
}

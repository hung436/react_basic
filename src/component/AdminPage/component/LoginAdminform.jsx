import React,{ useState}from 'react'
import {Modal,Button,Row,FloatingLabel,Form} from 'react-bootstrap'
export default function LoginAdminform(props) {
  const [inputValues, setInputValues] = useState({
    username: '', password: ''
  });
  const {onSubmit}=props;
 const handleSubmit = () => {
    if (!onSubmit) return;
    console.log('onSubmit',inputValues)
    onSubmit(inputValues);
  };


  let handleChange=event=>{
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    }
    let handleKeyDown=event=>{
if (event.key==='Enter'){
  handleSubmit()
}
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
       Đăng nhập ADMIN
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
      
    <Form.Control type="text" placeholder="Ví dụ: ttldhung" onChange={handleChange} name='username' onKeyDown={handleKeyDown}/>
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
  >
      
    <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' onKeyDown={handleKeyDown}/>
  </FloatingLabel>
        </div>
    </Row>
    </Modal.Body>
    <Modal.Footer>
    <Button variant ="success" onClick={handleSubmit}> Đăng nhập</Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

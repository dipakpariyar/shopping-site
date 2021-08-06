import React, {useEffect, useState} from 'react';
import { Button, } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { ImCheckboxChecked } from 'react-icons/im';

export default function ToastComponent(props) {
  const { isShow, onClose } = props
  console.log('props', props);
  const [show, setShow] = useState(isShow);

  useEffect(() => {
    const { isShow } = props;
  })

  return (
    <div style={{zIndex:'1002'}}>
    <ToastContainer position="bottom-center" >
        <Toast  onClose={onClose} show={isShow} delay={3000} autohide bg='success'>
          <Toast.Header >
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto"><ImCheckboxChecked style={{color:'green'}} /> </strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body style={{color:'white'}}><h5> Product added to cart successfully!</h5> </Toast.Body>
        </Toast>
    </ToastContainer>
    </div>
  )
}

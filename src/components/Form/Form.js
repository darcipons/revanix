import React from 'react'
import { Form, ButtonToolbar, Button } from 'react-bootstrap'

import './Form.css'

const FormBox = () => {

  return (
    <>
      
      <Form>
        <div className='contact_us_title'>Contact Us</div>
        
        <Form.Group controlId="name" className='form_inputs'>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="name" className='form_inputs'>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="name" className='form_inputs'>
          <Form.Control type="email" placeholder="Phone" />
        </Form.Group>

        <Form.Group controlId="name" className='form_inputs'>
          <Form.Control type="email" placeholder="Subject" />
        </Form.Group>
        
        <Form.Group controlId="textarea" className='form_inputs'>
          <Form.Control as="textarea" rows="3"  placeholder="Message"/>
        </Form.Group>

        <ButtonToolbar>
          <Button variant="primary" size="lg"> Submit </Button>
        </ButtonToolbar>

      </Form>
      
    </>
  )
}

export default FormBox

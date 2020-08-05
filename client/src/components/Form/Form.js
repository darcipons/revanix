import React, { Component } from 'react'
import { Form, ButtonToolbar, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import axios from 'axios'
import './Form.css'

class FormBox extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    // this.baseState = this.state

    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // resetForm = () => {
  //   this.setState(this.baseState)
  // }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, phone, subject, message } = this.state

    await axios.post('/api/form', {
      name,
      email,
      phone,
      subject,
      message
    })
  }



  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Submitted!</Popover.Title>
        <Popover.Content>
          Thank you for your submission.
        </Popover.Content>
      </Popover>
    );    
    return (
      <>
        <Form onSubmit={this.handleSubmit} >
          <div className='contact_us_title'>Contact Us</div>
          
          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control required type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control required type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control required type="text" placeholder="Phone" name="phone" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control required type="text" placeholder="Subject"  name="subject" onChange={this.handleChange}/>
          </Form.Group>
          
          <Form.Group controlId="textarea" className='form_inputs'>
            <Form.Control required as="textarea" rows="3"  placeholder="Message" name="message" onChange={this.handleChange}/>
          </Form.Group>

          <ButtonToolbar>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="primary" size="lg" type="submit"> Submit </Button>
          </OverlayTrigger>
          </ButtonToolbar>
        </Form>
      </>
    )
  }
}

export default FormBox
import React, { Component } from 'react'
import { Form, ButtonToolbar, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import axios from 'axios'
import './Form.css'

const formState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

class FormBox extends Component {
  constructor() {
    super()

    this.state = {
      ...formState,
      popoverMessage: 'Submitting...',
    };

    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetForm = () => {
    this.setState({
      ...this.state, ...formState,
    });
  }

  async handleSubmit(e) {
    e.preventDefault()
  
    const { name, email, phone, subject, message } = this.state

    const data = await axios.post('/api/form', {
      name,
      email,
      phone,
      subject,
      message
    })

    if (data.status === 200) {
      this.resetForm();
      this.setState(
        { popoverMessage: 'Thank you for your submission.' },
        () => 
          setTimeout(
            () => this.setState({ popoverMessage: 'Thank you for your submission.' }),
            1000
          )
      );
    } else {
      this.setState(
        { popoverMessage: 'Error: Please check your information and try again.' },
        () => 
          setTimeout(
            () => this.setState({ popoverMessage: 'Thank you for your submission.' }),
            5000
          )
      );
    }
  }

  render() {
    const { name, email, phone, message, subject, popoverMessage } = this.state;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          {popoverMessage}
        </Popover.Content>
      </Popover>
    );   

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <div className='contact_us_title'>Contact Us</div>
          
          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control value={name} required type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control value={email} required type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control value={phone} required type="text" placeholder="Phone" name="phone" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="name" className='form_inputs'>
            <Form.Control value={subject} required type="text" placeholder="Subject"  name="subject" onChange={this.handleChange}/>
          </Form.Group>
          
          <Form.Group controlId="textarea" className='form_inputs'>
            <Form.Control value={message} required as="textarea" rows="3"  placeholder="Message" name="message" onChange={this.handleChange}/>
          </Form.Group>

          <ButtonToolbar>
            <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
              <Button variant="primary" size="lg" type="submit"> Submit </Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </Form>
      </>
    )
  }
}

export default FormBox

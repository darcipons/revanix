import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './Commitment.css'

const Commitment = () => {
  return (
    <Accordion defaultActiveKey="0">
      {/* <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Our Commitment
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card> */}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Our Commitment
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Card.Text>HONESTY - Always telling the truth during the service and repair process, never mislead. Always make recommendations by order of priority of customers so they can plan for future service needs.</Card.Text>

            <Card.Text>INTEGRITY- Always doing the right thing, even when no one is watching. We build trust in our relationships through honest and ethical behavior.</Card.Text>

            <Card.Text>QUALITY AND EXCELLENCE - Set and achieve the highest standards in everything we do by using the best possible equipment, parts and personnel.</Card.Text>

            <Card.Text>TEAM WORK - We work together with you to make a difference.</Card.Text>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Commitment 

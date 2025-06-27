import { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Form, Button } from "react-bootstrap";
import { ArrowRightCircle, Download, ExclamationOctagon } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import ccat from '../img/cvsu.png';
import ama from '../img/ama.png';
import TrackVisibility from 'react-on-screen';
import '../css/ContactMe.css';
import Swal from 'sweetalert2';


function contactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c6b5fd9-3d61-423f-b128-1393818b1ae1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json()); 

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success"
      });
    }
  };

  return (
    <section className="contact-me" id="contact-me">
      <h1 className="contact-me-header">Contact Me</h1>
        <Container fluid="sm" className="contact-me-container">
          <Form onSubmit={onSubmit}>
            <div className="input-box">
              <Form.Label htmlFor="email-text">Email</Form.Label>
              <Form.Control type="email" id="email-text" name="name"/>  
            </div>
            
            <div className="input-box">
              <Form.Label htmlFor="name-text">Name</Form.Label>
              <Form.Control type="text" id="name-text" name="email"/>
            </div>

            <div className="input-box">
              <Form.Label htmlFor="message-text">Message</Form.Label>
              <Form.Control as="textarea" id="message-text" style={{ resize: 'none', height: '200px'}} name="message"/>
            </div>

            <Button style={{ width: '100%' }} type="submit">
              Submit
            </Button>
          </Form>
          
      </Container>
    </section>
  )
}

export default contactMe;
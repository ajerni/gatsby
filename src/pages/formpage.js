import React from "react"
import { Link } from "gatsby"
import { Form, Button} from "react-bootstrap"

import Layout from "../components/layout"

const FormPage = () => (
  <Layout>
    <div>
      <Form
        name="contactform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contactform" />
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" id="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput2">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" id="subject" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" id="message"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <br></br>
    <Link to="/">Go back to homepage</Link>
  </Layout>
)

export default FormPage

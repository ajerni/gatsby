import React from "react"
import { Link } from "gatsby"
import { Form } from "react-bootstrap"

import Layout from "../components/layout"

const FormPage2 = () => (
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
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput2">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <ul style={{ listStyle: "none", marginLeft: 0 }}>
          <li>
            <input type="submit" value="Send Message" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </Form>
    </div>
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FormPage2

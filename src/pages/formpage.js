import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
    <form name="kontakt" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/src/pages/index">
   <input type="hidden" name="bot-field" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    <br></br>

    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FormPage
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { Button, Form, Col, Row } from "react-bootstrap"

import { useMutation, useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

//Daten von graphcms.com:
//https://api-euwest.graphcms.com/v1/ck05dspnl13gs01d7htat4n7e/master
const ImageTestPage = () => {

  const myFruit = useStaticQuery(graphql`
    query queryAtGraphCMS {
      fruitapi {
        fruitses(where: { name: "Apfel" }) {
          image {
            url
          }
        }
      }
    }
  `)

  const APOLLO_QUERY = gql`
  query{
    entries (orderBy: createdAt_DESC, first: 1){
      createdAt
      text
    }
  }
  `

  const APOLLO_MUTATION = gql`
  mutation makeEntry($text: String!) {
    createEntry(data: { text: $text }) {
      id
      text
    }
  }
  `

  //aliasing damit es keine überschneidung gibt!
  const [inputValue, setInputValue] = useState("")
  const {loading:loading2, error:error2, data:data2} = useQuery(APOLLO_QUERY)
  const [addEntry, { loading, error, data }] = useMutation(APOLLO_MUTATION)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = event => {
    //console.log(inputValue)
    addEntry({ variables: { text: inputValue } })
    event.preventDefault()
  }

  //Optionen für Datum Formatierung
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  
  return (
    <Layout>
      <h2>Image and Data from graphcms</h2>

      <img src={myFruit.fruitapi.fruitses[0].image.url} alt="frucht" />

      <br></br>

          {loading2 && <p >Fetching data...</p>}
          {error2 && <p>Error: ${error2.message}</p>}
          {data2 && data2.entries &&(
            
            <div style={{ display: "inline" }}>
              <p style={{ display: "inline" }}>Neuster Eintrag: </p>
              <p style={{ display: "inline", color: "red" }}>{data2.entries[0].text.toUpperCase()}</p>
              <p style={{ display: "inline" }}> vom {new Date(data2.entries[0].createdAt).toLocaleDateString("de-DE", options)}</p>
            </div>
           
          )}
     
      <div style={{display: "inline", marginLeft: 15, marginTop: 15}}>
        {/* <form onSubmit={handleSubmit} style={{marginTop:20}}>
          <label>
            Entry: 
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{marginLeft: 20}}
            />
          </label>
          <input type="submit" value="Submit" style={{marginLeft: 20}}/>
        </form> */}
        <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
            <Form.Label column sm={-2}>
              Entry:
            </Form.Label>
            <Col>
              <Form.Control type="text" value={inputValue} onChange={handleChange}/>
            </Col>
            <Col>
              <Button variant="primary" type="submit">Submit</Button>
            </Col> 
          </Form.Group>
        </Form>
      </div>

      {loading && <p style={{margin: "auto", marginTop:20}}>Submitting data...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.createEntry && data.createEntry.text && (
      <p>New Entry "{data.createEntry.text}" created with id: {data.createEntry.id}</p>
      )}

      <Link to="/" style={{ marginTop: 90 }}>
        Go back to homepage
      </Link>
      <div style={{ marginBottom: 20 }}></div>
    </Layout>
  )
}

export default ImageTestPage
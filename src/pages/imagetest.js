import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import client2 from "../apollo2/client2"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

//Daten von graphcms.com
const ImageTestPage = () => {
  const myFruit = useStaticQuery(graphql`
    query queryAtGraphCMS {
      fruitapi {
        fruitses(where: { name: "Apfel" }) {
          image {
            url
          }
        }
        entries(orderBy: createdAt_DESC, first: 1) {
          text
          createdAt
        }
      }
    }
  `)

  let date = new Date(myFruit.fruitapi.entries[0].createdAt)
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let showDate = date.toLocaleDateString("de-DE", options)

  const APOLLO_MUTATION = gql`
    mutation makeEntry($text: String!) {
      createEntry(data: { text: $text }) {
        id
        text
      }
    }
  `

  const [inputValue, setInputValue] = useState("")
  const [addEntry, { loading, error, data }] = useMutation(APOLLO_MUTATION)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = event => {
    console.log(inputValue)
    addEntry({ variables: { text: inputValue }, client: client2 })
    event.preventDefault()
  }

  return (
    <Layout>
      <h2>Image and Data from graphcms</h2>

      <img src={myFruit.fruitapi.fruitses[0].image.url} alt="frucht" />

      <br></br>

      <div style={{ display: "inline" }}>
        <h4 style={{ display: "inline" }}>Neuester Eintrag: </h4>
        <p style={{ display: "inline", color: "red" }}>
          {myFruit.fruitapi.entries[0].text.toUpperCase()}
        </p>
        <p style={{ display: "inline" }}> vom {showDate}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Entry: 
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
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

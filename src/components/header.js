import React from 'react'
import Navbar from "./navbar"

const header = () => {
    return (
        <div style={{
            width: 100%,
            height: "60px",
            margin: 0,
            padding: 0,
            backgroundColor:"#7e85fc"
        }}>
            <Navbar/>
        </div>
    )
}

export default header

import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to ="/">Link to Home Page</Link><br></br>
      <Link to="/Profile">Link to Profile Page</Link>
    </div>
  )
}

export default About

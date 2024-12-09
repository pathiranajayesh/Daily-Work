import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile Page</Link> <br></br>
      <Link to="/about">Go to About Page</Link><br></br>
      <Button onClick={()=> Navigate ("/Profile")}>Profile</Button>
    </div>
  )
}

export default Home


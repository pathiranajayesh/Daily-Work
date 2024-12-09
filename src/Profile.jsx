import React from 'react'
import { Button } from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'

function Profile() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/">Link to Home Page</Link><br></br>
      <Link to="/About">Link to About Page</Link><br></br>
      <Button onClick={()=> Navigate(-1)}>Back</Button>
    </div>
  )
}

export default Profile

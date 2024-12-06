import React from 'react'
import TopicBox from '../Components/TopicBox'
import Contents from '../Components/Contents'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/About">Go to the About Page</Link><br></br>
      <Link to="/Contact">Go to the Contact Page</Link>
      
    </div>
  )
}

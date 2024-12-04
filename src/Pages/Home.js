import React from 'react'
import TopicBox from '../Components/TopicBox'
import Contents from '../Components/Contents'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="Kottu" price = "Rs.250"/>
      <TopicBox food="Rice" price = "Rs.300"/>
      <TopicBox food="Hoppers" price = "Rs.450"/>
      {/* <Contents/> */}
      {/* Test Comment */}
      
    </div>
  )
}

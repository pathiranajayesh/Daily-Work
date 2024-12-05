import React from 'react'
import TopicBox from '../Components/TopicBox'
import Contents from '../Components/Contents'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="Kottu" price = "Rs.250">
        <span>This is the description.</span>
      </TopicBox>
      <TopicBox food="Rice" price = "Rs.300">
        <button>This is a button</button>
      </TopicBox>
      <TopicBox food="Hoppers" price = "Rs.450">
        <p>Praneeth Jayesha</p>
      </TopicBox>
      {/* <Contents/> */}
      
    </div>
  )
}

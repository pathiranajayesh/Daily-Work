import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {
  // const topic ="My name is Praneeth.."
  // const item  = " Jayesha"

  // const a = 10;
  // const b = 20;
  // const c = a+b;



  return (
    <div>
      <div className='topicBox'>
        <span className='text'>My favourite food is {props.food} & the price is {props.price}.</span>
      </div>
    </div>
  )
}

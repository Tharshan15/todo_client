import React, { useState } from 'react'

const About = () => {
  const[count,setCount] = useState(0)
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1)
  }
  return (
    <div className='about'>
      <h1>counter</h1>
      <div className='counter'>
        <h1>{count}</h1>
        <button onClick={increment}>count</button>
        <button onClick={decrement}>discount</button>
      </div>

    </div>
  )
}

export default About
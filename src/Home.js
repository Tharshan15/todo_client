import React, {useState } from 'react'
import luffy from './assets/luffy.webp'
import tanjiro from './assets/tanjiro.webp'
const Home = () => {
  const[pic,setPic]=useState(luffy)
  function changepic(){
      setPic(tanjiro)
  }
  function back(){
    setPic(luffy)
  }
  return (
    <div className='home'>
      <h1>welcome to my project</h1>
      <div>
        <img src={pic} alt="luffy" onMouseEnter={changepic} onMouseLeave={back}/>
      </div>

    </div>
  )
}

export default Home
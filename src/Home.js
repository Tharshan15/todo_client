import React, {useState } from 'react'
import luffy from './assets/luffy.webp'
import tanjiro from './assets/tanjiro.webp'
import SplitText from './motion/SplitText';

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
      <h1><SplitText
        text="Welcome to Yellow Foodie"
        className="home-title"
        splitType="words"
      /></h1>
      <p className='home-para'>Discover delicious recipes, cooking tips, and culinary inspiration to elevate your home cooking experience.</p>
      <div className="image-container">
        <img 
          src={pic} 
          alt="Delicious Food" 
          className="home-image" 
          onMouseOver={changepic} 
          onMouseOut={back}
        />
      </div>    
    </div>
  )
}

export default Home
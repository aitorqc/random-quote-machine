import React, { useState } from 'react'

import Wrapper from "./components/Wrapper";

function App() {
  const [number, setNumber] = useState(0)
  const color = ["#77b1a9", "#27ae60", "#73a857", "#472e32", "#bdbb99", "#fb6964", "#2c3e50"];
  const quotes = [
    {
      quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers"
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn"
    },
    {
      quote: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey"
    },
    {
      quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama"
    },
    {
      quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
      author: "Henry David Thoreau"
    },
    {
      quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin"
    },
  ]

  const newQuote = () => {
    let selectorN;
    do{
     selectorN = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    }while(selectorN === number);
    setNumber(selectorN);
  }

  return (
    <div className='container' style={{backgroundColor: color[number]}}>
      <Wrapper data={quotes[number]} color={color[number]} newQuote={() => newQuote()}/>
    </div>
  );
}

export default App;

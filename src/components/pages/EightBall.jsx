import React, { useEffect } from 'react'
import { useState } from 'react';
import { getData } from '../../services/services'
import MenuButtons from '../MenuButtons';

const EightBall = () => {
  
  //Sets the state of avariable and what it will output to without the need to refresh the page. Will not give a proper variable otherwise
  const [output, setOutput] = useState('');
  
  const [userInput, setUserInput] = useState('');

  //Fetching this data from services.js. It is put into setOutput so that output is given a proper variable.
  const fetchData = async (question) => {
    setOutput(await getData(`Mini8/MiniChallenge8-8Ball/${question}`));
  }

  useEffect(() => {
    if (userInput == '')
    {
      setOutput("Ask a yes/no question");
    } else {
      fetchData(userInput);
    }
  }, [userInput])

  return (
    <div>
      <h1 className='text-7xl'>Eight Ball</h1>
      <input type="text" onChange={(event) => setUserInput(event.target.value)} className='text-black rounded-lg border-gray-400 border-4 m-5'/>
      <h2>{output}</h2>
      <MenuButtons/>
    </div>
  )
}

export default EightBall

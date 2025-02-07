import React, { useEffect, useState } from 'react'
import { getData } from '../../services/services';

const OddOrEven = () => {
  const [output, setOutput] = useState('');
  
  const [userInput, setUserInput] = useState('');

  //Fetching this data from services.js. It is put into setOutput so that output is given a proper variable.
  const fetchData = async (num) => {
    setOutput(await getData(`Mini6/MiniChallenge6-OddOrEven/${num}`));
  }

  useEffect(() => {
    if (userInput == '')
    {
      setOutput("Input a number to test.");
    } else {
      fetchData(userInput);
    }
  }, [userInput])

  return (
    <div>
      <h1 className='text-7xl'>Odd Or Even</h1>
      <input type="text" onChange={(event) => setUserInput(event.target.value)} className='text-black rounded-lg border-gray-400 border-4 m-5'/>
      <h2>{output}</h2>
    </div>
  )
}

export default OddOrEven

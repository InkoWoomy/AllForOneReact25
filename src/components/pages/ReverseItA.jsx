import React, { useEffect, useState } from 'react'
import { getData } from '../../services/services';
import MenuButtons from '../MenuButtons';

const ReverseItA = () => {
  const [output, setOutput] = useState('');
  
  const [userInput, setUserInput] = useState('');

  //Fetching this data from services.js. It is put into setOutput so that output is given a proper variable.
  const fetchData = async (input) => {
    setOutput(await getData(`Mini7A/Mini7-ReverseIt(Alphanumeric)/${input}`));
  }

  useEffect(() => {
    if (userInput == '')
    {
      setOutput("Input a text string to test.");
    } else {
      fetchData(userInput);
    }
  }, [userInput])

  return (
    <div>
      <h1 className='text-7xl'>Reverse It (Alphanumeric)</h1>
      <input type="text" onChange={(event) => setUserInput(event.target.value)} className='text-black rounded-lg border-gray-400 border-4 m-5'/>
      <h2 className='text-5xl'>{output}</h2>
      <MenuButtons/>
    </div>
  )
}

export default ReverseItA

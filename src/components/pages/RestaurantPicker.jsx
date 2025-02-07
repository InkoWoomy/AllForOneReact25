import React, { useEffect } from 'react'
import { useState } from 'react';
import { getData } from '../../services/services'
import { Button } from 'flowbite-react';

const RestaurantPicker = () => {
  
  //Sets the state of avariable and what it will output to without the need to refresh the page. Will not give a proper variable otherwise
  const [output, setOutput] = useState('');
  
  const [userInput, setUserInput] = useState('');

  //Fetching this data from services.js. It is put into setOutput so that output is given a proper variable.
  const fetchData = async (input) => {
    setOutput(await getData(`Mini10/Mini10-ResturauntPicker/${input}`));
  }

  useEffect(() => {
    if (userInput == '')
    {
      setOutput("Where do you want to go?");
    } else {
      fetchData(userInput);
    }
  }, [userInput])

  return (
    <div className="">
      <h1 className='text-7xl'>Restaurant Picker</h1>
      <div className="flex flex-cols-3"></div>
      <div className='col-start-1'>
        <Button onChange={(event) => setUserInput(event.target.innerText)}>Pizza</Button>
      </div>
      <div className='col-start-2'>
        <Button>Fast Food</Button>
      </div>
      <div className='col-start-3'>        
        <Button>Chinese</Button>
      </div>
      <h2>{output}</h2>
    </div>
  )
}

export default RestaurantPicker

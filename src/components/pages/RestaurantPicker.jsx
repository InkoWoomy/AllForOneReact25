import React, { useEffect } from 'react'
import { useState } from 'react';
import { getData } from '../../services/services'
import { Button } from 'flowbite-react';
import MenuButtons from '../MenuButtons';

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
      <div className="md:grid grid-cols-3 justify-items-center my-10">
        <div className='col-start-1 sm:m-5 md:m-0'>
          <Button onClick={() => fetchData("pizza")}><h1 className='text-3xl p-5'>Pizza</h1></Button>
        </div>
        <div className='col-start-2 sm:m-5 md:m-0'>
          <Button onClick={() => fetchData("fastfood")}><h1 className='text-3xl p-5'>Fast Food</h1></Button>
        </div>
        <div className='col-start-3 sm:m-5 md:m-0'>        
          <Button onClick={() => fetchData("chinese")}><h1 className='text-3xl p-5'>Chinese</h1></Button>
        </div>
      </div>
      <h2>{output}</h2>
      <MenuButtons/>
    </div>
  )
}

export default RestaurantPicker

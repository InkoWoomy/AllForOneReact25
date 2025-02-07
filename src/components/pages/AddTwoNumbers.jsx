import React, { useEffect, useState } from 'react'
import { getData } from '../../services/services';
import MenuButtons from '../MenuButtons';

const AddTwoNumbers = () => {

    const [output, setOutput] = useState('');

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const fetchData = async (num1, num2) =>
    {
        setOutput(await getData(`Mini2/MiniChallenge2-AddTwoNumbers/${num1}/${num2}/`))
    }

    useEffect(() => {
        if (num1 == '' || num2 == '')
        {
            setOutput('Please enter two numbers to be calculated.');
        } else {
            fetchData(num1, num2)
        }
    }, [num1, num2])

  return (
    <div>
      <h1 className='text-7xl'>Add Two Numbers</h1>
      <input type="text" onChange={(event) => setNum1(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" onChange={(event) => setNum2(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <h2 className='text-5xl'>{output}</h2>
      <MenuButtons />
    </div>
  )
}

export default AddTwoNumbers

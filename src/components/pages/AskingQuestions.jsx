import React, { useEffect, useState } from 'react'
import { getData } from '../../services/services';

const AskingQuestions = () => {

    const [output, setOutput] = useState('');

    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const fetchData = async (name, time) =>
    {
        setOutput(await getData(`Mini3/MiniChallenge3-AskingQuestions/${name}/${time}/`))
    }

    useEffect(() => {
        if (name == '')
        {
            setOutput('What is your name?');
        } else 
        if (time == '')
        {
            setOutput('What tine did you wake up?');
        } else {
            fetchData(name, time)
        }
        
    }, [name, time])

  return (
    <div>
      <h1 className='text-7xl'>Asking Questions</h1>
      <input type="text" placeholder="Name?" onChange={(event) => setName(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Time you woke up?' onChange={(event) => setTime(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <h2>{output}</h2>
    </div>
  )
}

export default AskingQuestions

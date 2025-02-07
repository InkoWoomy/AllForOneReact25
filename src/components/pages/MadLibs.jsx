import React, { useEffect, useState } from 'react'
import { getData } from '../../services/services';

const MadLibs = () => {

    const [output, setOutput] = useState('');

    const [verb1, setVerb1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [verb3, setVerb3] = useState('');
    const [place, setPlace] = useState('');
    const [personName, setPersonName] = useState('');
    const [animal, setAnimal] = useState('');
    const [adjective, setAdjective] = useState('');
    const [clothingItem, setClothingItem] = useState('');
    const [noun1, setNoun1] = useState('');
    const [noun2, setNoun2] = useState('');

    const fetchData = async (verb1, verb2, verb3, place, personName, animal, adjective, clothingItem, noun1, noun2) =>
    {
        setOutput(await getData(`Mini5/MiniChallenge5-MadLibs/${verb1}/${verb2}/${verb3}/${place}/${personName}/${animal}/${adjective}/${clothingItem}/${noun1}/${noun2}`))
    }

    useEffect(() => {
        if (verb1 == '' || verb2 == '' || verb3 == '' || place == '' || personName == '' || animal == '' || adjective == '' || clothingItem == '' || noun1 == '' || noun2 == '')
        {
            setOutput('Please enter two numbers to be calculated.');
        } else {
            fetchData(verb1, verb2, verb3, place, personName, animal, adjective, clothingItem, noun1, noun2)
        }
    }, [verb1, verb2, verb3, place, personName, animal, adjective, clothingItem, noun1, noun2])

  return (
    <div>
      <h1 className='text-7xl'>Add Two Numbers</h1>
      <input type="text" placeholder='Verb' onChange={(event) => setVerb1(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Verb' onChange={(event) => setVerb2(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Verb' onChange={(event) => setVerb3(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Place' onChange={(event) => setPlace(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Name of a Person' onChange={(event) => setPersonName(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Animal' onChange={(event) => setAnimal(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Adjective' onChange={(event) => setAdjective(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Article of Clothing' onChange={(event) => setClothingItem(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Noun' onChange={(event) => setNoun1(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <input type="text" placeholder='Noun' onChange={(event) => setNoun2(event.target.value)} className='text-black m-5 rounded-lg border-gray-400 border-4'/>
      <h2>{output}</h2>
    </div>
  )
}

export default MadLibs


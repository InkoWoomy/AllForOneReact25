import './App.css'
import SayHello from './components/pages/SayHello'
import AddTwoNumbers from './components/pages/AddTwoNumbers'
import AskingQuestions from './components/pages/AskingQuestions'
import GreaterThanLessThan from './components/pages/GreaterThanLessThan'
import MadLibs from './components/pages/MadLibs'
import OddOrEven from './components/pages/OddOrEven'
import ReverseItA from './components/pages/ReverseItA'
import ReverseItN from './components/pages/ReverseItN'
import EightBall from './components/pages/EightBall'
import RestaurantPicker from './components/pages/RestaurantPicker'
import { Button } from 'flowbite-react'
import { NavLink } from 'react-router-dom'


function App() {


  console.log("App is rendering")
  return (
    <div>
      <h1 className='text-7xl mb-4'>All For One</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center center'>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/say-hello'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Say Hello</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/add-two-numbers'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Add Two Numbers</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/asking-questions'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Asking Questions</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/greater-less'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Greater Than Or Less Than</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/mad-libs'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Mad Libs</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/odd-even'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Odd Or Even</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/reverse-it-a'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Reverse It (Alphanumeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/reverse-it-n'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Reverse It (Numeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2'>
          <NavLink type='button' to={'/eight-ball'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Eight Ball</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 w-full p-2 col-start-2'>
          <NavLink type='button' to={'/restaurant-picker'}>
            <Button className='w-full h-full flex items-center'>
              <h1 className='text-3xl m-2'>Restaurant Picker</h1>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default App

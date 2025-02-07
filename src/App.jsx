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
      <h1 className='text-7xl'>All For One</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center'>
        <div className='m-5'>
          <NavLink type='button' to={'/say-hello'}>
            <Button>
              <h1 className='text-3xl m-4'>Say Hello</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/add-two-numbers'}>
            <Button>
              <h1 className='text-3xl m-4'>Add Two Numbers</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/asking-questions'}>
            <Button>
              <h1 className='text-3xl m-4'>Asking Questions</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/greater-less'}>
            <Button>
              <h1 className='text-3xl m-4'>Greater Than Or Less Than</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/mad-libs'}>
            <Button>
              <h1 className='text-3xl m-4'>Mad Libs</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/odd-even'}>
            <Button>
              <h1 className='text-3xl m-4'>Odd Or Even</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/reverse-it-a'}>
            <Button>
              <h1 className='text-3xl m-4'>Reverse It (Alphanumeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/reverse-it-n'}>
            <Button>
              <h1 className='text-3xl m-4'>Reverse It (Numeric)</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5'>
          <NavLink type='button' to={'/eight-ball'}>
            <Button>
              <h1 className='text-3xl m-4'>Eight Ball</h1>
            </Button>
          </NavLink>
        </div>
        <div className='m-5 col-start-2'>
          <NavLink type='button' to={'/restaurant-picker'}>
            <Button>
              <h1 className='text-3xl m-4'>Restaurant Picker</h1>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default App

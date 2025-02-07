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


function App() {


  console.log("App is rendering")
  return (
    <>
      <RestaurantPicker />
    </>
  )
}

export default App

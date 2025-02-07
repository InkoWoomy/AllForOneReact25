import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SayHello from './components/pages/SayHello.jsx'
import AddTwoNumbers from './components/pages/AddTwoNumbers.jsx'
import AskingQuestions from './components/pages/AskingQuestions.jsx'
import GreaterThanLessThan from './components/pages/GreaterThanLessThan.jsx'
import MadLibs from './components/pages/MadLibs.jsx'
import OddOrEven from './components/pages/OddOrEven.jsx'
import ReverseItA from './components/pages/ReverseItA.jsx'
import ReverseItN from './components/pages/ReverseItN.jsx'
import RestaurantPicker from './components/pages/RestaurantPicker.jsx'
import EightBall from './components/pages/EightBall.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/say-hello' element={<SayHello />}/>
        <Route path='/add-two-numbers' element={<AddTwoNumbers />}/>
        <Route path='/asking-questions' element={<AskingQuestions />}/>
        <Route path='/greater-less' element={<GreaterThanLessThan />}/>
        <Route path='/mad-libs' element={<MadLibs />}/>
        <Route path='/odd-even' element={<OddOrEven />}/>
        <Route path='/reverse-it-a' element={<ReverseItA />}/>
        <Route path='/reverse-it-n' element={<ReverseItN />}/>
        <Route path='/eight-ball' element={<EightBall />}/>
        <Route path='/restaurant-picker' element={<RestaurantPicker />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

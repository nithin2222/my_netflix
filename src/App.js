import React from 'react'
import "./App.css"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"
import HomePage from './components/HomePage'
import Player from "./Player"

const App = () => {
  return (
   <div className='App'>
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUpPage/>}/>
          <Route exact path='/player' element={<Player/>}/>
          <Route exact path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      
   </div>
  )
}

export default App

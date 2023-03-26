import React from 'react'
import About from './component/About/About'
import TodoApp from './component/TodoApp'
import Header from './component/header/header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
function App() {


  return (
   <>
    
  <Router>
    <Header/>
  <Routes> 
    <Route path='/' element={<TodoApp/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes> 
  </Router>
  </>
  )
}

export default App

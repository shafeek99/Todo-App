import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const header = () => {
  return (
  <header>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>
  </header>
  )
}

export default header

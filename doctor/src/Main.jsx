import React from 'react'
import "./Main.css"
import Header from './Landing/Header'
import Carousle from './Landing/Carousle'

export default function Main() {
  return (
    <div className="container">
        <Header />
        <Carousle />
    </div>
  )
}

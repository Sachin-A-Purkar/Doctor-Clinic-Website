import React from 'react'
import "./Main.css"
import Header from './Landing/Header'
import Carousle from './Landing/Carousle'

import Section1 from './Landing/Section1'

export default function Main() {
  return (
    <div className="container">
        <Header />
        <Carousle />
        <Section1/>
    </div>
  )
}

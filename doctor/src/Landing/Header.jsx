import React from 'react'
import "./Header.css"

import H1 from "../images/heart.png"

export default function Header() {
  return (
    <div className='header'>
      <div className='clock'>

      </div>
      <div className='headbar'>
            <div className='part1'>
                <img src={H1} alt='logo' className='H1'/><br/>
                <h2>Apex Hospital</h2>
            </div>
            <div className='part2'>
                
            </div>
           
            
      </div>
    </div>
  )
}

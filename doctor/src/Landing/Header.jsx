import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import H1 from "../images/heart.png"


export default function Header() {
  return (
    <div className='header'>
      <div className='clock'>

      </div>
      <div className='headbar'>
            <div className='part1'>
                <img src={H1} alt='logo' className='himg1'/>
                <h2 className='text1'>Apex Hospital</h2>
            </div>
            <div className='part2'>
                <a href="#home"> HOME </a>
                <a href="#home"> ABOUT </a>
                <a href="#home"> SERVICES </a>
                <a href="#home"> PAGES </a>
                <a href="#home"> CONTACT </a>
            </div>
            <a href='#home'>
              <div className="part3">
                Appointment <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
            
      </div>
    </div>
  )
}

import React from 'react'
import "./header.css"
import Comp from './Comp'
import ME from '../../assets/youssefbg.png'
import HeaderScroll from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1>YOUSSEF AOUF</h1>
        <h5 className='text-light'> DIGITAL MARKETER</h5>
        <Comp/>
        <HeaderScroll/>
        <div className="me">
           <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'> Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
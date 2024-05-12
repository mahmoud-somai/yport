import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DIGITAL MARKETING</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>earch Engine Optimization (SEO)</p>
              </li>

              <li>
                <BiCheck className='service__list-icon'/>
                <p>Social Media Marketing</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Content Marketing</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Analytics and Reporting</p>
              </li>

          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>GRAPHIC DESIGN</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Branding and Logo Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Print Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>UI/UX Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Social Media Graphics</p>
              </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Website Design and Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Responsive Design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Content Management Systems</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>SEO-friendly Web Development</p>
              </li>


          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
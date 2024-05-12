import React from 'react'
import './about.css'
import ME from '../../assets/youssef.jpeg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container"> 
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'></FaAward>
            <h5>Digital Marketing</h5>
            <small>Sd Year</small>
            <br></br>
            <small>ISET </small>
          </article>


          <article className='about__card'>
            <FiUsers className='about__icon'></FiUsers>
            <h5>Clients</h5>
            <small>100 client</small>
          </article>


          <article className='about__card'>
            <VscFolderLibrary className='about__icon'></VscFolderLibrary>
            <h5>Projects</h5>
            <small>Design</small>
            <br></br>
            <small>Websites</small>
            <br></br>
            <small>Marketing</small>
          </article>
        </div>
        <p>In the digital marketing world, I'm like the brains behind clever strategies and the captain of successful campaigns. By mixing creativity with sharp thinking, I craft stories that people love and help businesses thrive. Besides that, I also build websites and create cool graphics. Whether I'm improving online platforms or designing eye-catching visuals, I enjoy staying updated on what's new and making things happen.</p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
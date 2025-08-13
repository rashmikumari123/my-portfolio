import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src= {profile} alt="Rashmi" className='profile-pic'/>
        <h1> <span>I'm Rashmi Kumari</span>, aspiring frontend developer.</h1>
        <p> I hold a B.Tech in Computer Science and have a strong interest in 
        web development. I enjoy creating responsive, user-friendly websites using HTML, CSS, and JavaScript.
         Currently, I’m learning React and Node.js.</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink  className ='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
         </div>
    </div>
  )
}

export default Hero
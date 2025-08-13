import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_img.png'

const About = () => {
  return (
    <div  id = 'about' className='about'>
      <div className="about-title">
          <h1>About Me</h1>
          <img src = {theme_pattern} alt =""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src= {about_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
             <p> Hello! I’m <strong>Rashmi Kumari</strong>, a passionate and dedicated web developer with a strong foundation in 
             <strong> HTML, CSS, JavaScript</strong>, and beginner-level experience in <strong>React</strong> and <strong>Node.js</strong>.
               I enjoy turning creative ideas into clean, responsive, and user-friendly websites.</p>
            
             <p>  As a recent <strong>Computer Science graduate</strong>, I’ve worked on hands-on projects like personal portfolio sites, 
             responsive layouts, and basic MERN stack applications. I’m always eager to explore new technologies 
             and improve my skills through practical experience.</p>

               <p>I’m actively seeking <strong>internship</strong> or <strong>entry-level opportunities</strong> where I can contribute, grow, and 
                collaborate with experienced developers. </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg'

const skills = [
  { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Core Java (OOP)'] },
  { category: 'Frontend', items: ['React (Basic)', 'Bootstrap', 'Responsive Design'] },
  { category: 'Backend (Basic)', items: ['Node.js', 'Express.js'] },
  { category: 'Database', items: ['MongoDB (Basic)', 'SQL'] },
  { category: 'Tools', items: ['Postman', 'Chrome DevTools'] } // Removed Git & GitHub here
];


const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="skills-title">
            <h1>My Skills</h1>
             <img src = {theme_pattern} alt =""/>
        </div>
      

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div className="skill-card" key={index}>
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

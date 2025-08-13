import React, { useRef } from 'react';
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
   menuRef.current.style.right = "0";
  }

   const closeMenu = () => {
   menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <h1>Rashmi Kumari</h1>
        <img src = {menu_open}  onClick = {openMenu} alt="" className='nav-mob-open'/>
        <ul ref = {menuRef} className='nav-menu'>
          <img src= {menu_close}  onClick =  {closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className ='anchor-link'  href='#home'>Home</AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className ='anchor-link'offset={50} href='#skills'>Skills</AnchorLink></li>
            <li><AnchorLink className ='anchor-link' offset={50} href='#project'>Project</AnchorLink></li>
            <li><AnchorLink className ='anchor-link'offset={50} href='#contact'>Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className ='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
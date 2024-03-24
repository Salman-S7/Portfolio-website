import { Link, NavLink } from 'react-router-dom';
import './sidebar.css'
import Logos from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logo-img-1' src={Logos} alt='logo'></img>
            <img className='logo-img-2' src={LogoSubtitle} alt='salman'></img>
            {/* <h2>Salman</h2> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul className='social-links'>
            <li className='social-link-1'>
                <a href="https://www.linkedin.com/in/salman-shaikh-200287295" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li className='social-link-2'>
                <a href="https://github.com/Salman-S7/" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
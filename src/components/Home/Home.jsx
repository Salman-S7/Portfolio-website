import './home.css'
import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a','l','m','a','n'];
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r'];

  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },4000)
  },[])


  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span> 
              <span className={`${letterClass} _12`}>i,</span>
              

              <br />
              <span className={`${letterClass} _13`}>I</span> 
              <span className={`${letterClass} _14`}>'m</span> 


                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                index={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                index={22}/>
            </h1>
            <h2>
                Full Stack Developer / Problem Solver
            </h2>
            <Link to="/contact" className='flat-btn'>CONTACT ME</Link>
        </div>
        <Logo></Logo>
    </div>
  )
}

export default Home;
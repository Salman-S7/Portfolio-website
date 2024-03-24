import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './about.css'

import React, { useEffect, useState } from 'react'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

    
function About() {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },3000)
  },[])

  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                index={15}
                />
            </h1>
            <p className='p-1'>
                I'm very ambitious Full-stack Developer looking for a role in 
                established IT company the opportunity to work with latest technologies on 
                challenging and diverse projects.
            </p>
            <p className='p-2'>
                I'm quitely confident, naturally curious and perpetually working on 
                improving my chops one problem at a time.
            </p>
            <p className='p-3'>
                If I need to define myself in one sentence that would be hard working 
                programmer and problem solver, I love to solve problems and I am chess fanatic and 
                tech obsessed.
            </p>
        </div>
        <div className="stage-cube-cont">
            <div className="cube-spinner">
                <div className="face-1">
                    <FontAwesomeIcon icon={faReact} color='#61dafb'/>
                </div>
                <div className="face-2">
                    <FontAwesomeIcon icon={faHtml5} color='#FF0000'/>
                </div>
                <div className="face-3">
                    <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                </div>
                <div className="face-4">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className="face-5">
                    <FontAwesomeIcon icon={faGitAlt} color='#EC428'/>
                </div>
                <div className="face-6">
                    <FontAwesomeIcon icon={faJava} color='#FF6600'/>
                </div>
               
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About
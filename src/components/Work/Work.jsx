import './work.css'
import { useState, React, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
function Work() {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
        setLetterClass("text-animate-hover")
        },3000)
    },[])

  return (
    <>
        <div className='work-page container'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','m','i','n','g',' ','s','o','o','n']}
                    index={15}
                    />
                </h1>
            </div>
        </div>
    <Loader type='pacman'/>
        
    </>
  )
}

export default Work
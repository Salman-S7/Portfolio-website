import Loader from 'react-loaders'
import './contact.css'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
            'service_2s4aknq',
            'template_n7cicwn',
            refForm.current,
            {
                publicKey: 'YF4IvBit3AfNH88KF',
            }

        )
        .then(()=> {
            alert("Messege successfully sent!")
            window.location.reload(false);
        },
        (err)=>{alert("Failed to send, please try again!")
                console.log(err)},
        ); 
    };

    useEffect(()=>{
        setTimeout(()=>{
        setLetterClass("text-animate-hover")
        },4000)
    },[])

  return (
    <div>
        <div className="container">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o',,'n','t','a','c','t',' ','M','e']}
                    index={15}
                    />
                </h1>
                <p className='p-1'>
                I'm very ambitious Full-stack Developer looking for a role in 
                established IT company the opportunity to work with latest technologies on 
                challenging and diverse projects.
            </p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type="email" name='email' placeholder='Email' required/>
                        </li>
                        <li className='half'>
                            <input type="text" name='subject' placeholder='Subject' required/>
                        </li>
                        <li className='half'>
                            <textarea type="text" name='message' placeholder='Message' required/>
                        </li>
                        <li>
                            <input type="submit" className='flat-btn' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
            </div>
            <div className="info-map">
                Salman Shaikh
                <br />
                India
                <br />
                Pune Mahrashtra.
                <br />
                <span>salmanshaikh3747@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[18.751778, 73.551399]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                    <Marker position={[18.751778, 73.551399]}>
                        <Popup>Salman lives here, come over for a cup of tea..: )</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
    </div>
  )
}

export default Contact
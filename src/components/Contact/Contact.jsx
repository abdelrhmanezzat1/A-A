import React, { useContext, useRef, useState } from 'react'
import "./contact.scss"
import img from "../../img/contact.png"
import img1 from "../../img/contact1.png"
import {BsTelephoneInbound} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import {HiOutlineLocationMarker} from "react-icons/hi"
import emailjs from 'emailjs-com';
import { darkTheme } from '../../Toggle'


function Contact() {
  const im = useContext(darkTheme)

  const fRef = useRef()
  const [ok,setok]=useState(false)
  const iref = useRef()
  const iref1 = useRef()
  const iref2 = useRef()
  const iref3 = useRef()
  const hendel = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_3l9ev7r', 'template_fm1085b', fRef.current, 'user_sD72DDJBzcfrDeaP0o0qm')
    .then((result) => {
        console.log(result.text);
        iref.current.value='';
        iref1.current.value='';
        iref2.current.value='';
        iref3.current.value='';
        setok(true)
    }, (error) => {
        console.log(error.text);
    });

  }
    return (
        <div className="contact" id="Contact">
            <h1 className="title">
                Contact Us
              </h1>
              <div className="All">

            <div className="right">
              <img src={im.state.dark?img1:img} alt="1" />
            </div>
            <div className="left">
              <div className="bg"></div>
             
              <div className="data">
                <h5>
                  <BsTelephoneInbound  className="icon"/>
                  01112499872
                </h5>
                <h5>
                  <SiGmail className="icon"/>
                  abdelrhmansoliman202@gmail.com
                </h5>
                <h5>
                  <HiOutlineLocationMarker className="icon"/>
                  Eg,cairo
                </h5>
              </div>
              <form  ref={fRef} onSubmit={hendel}>
                <input ref={iref} type="text" name="User-Name"  placeholder="Your Name"/>
                <input ref={iref1} type="email" name="User-Email" placeholder="Your Email"/>
                <input ref={iref2} type="subject" name="Subject" placeholder="Subject"/>
                <textarea ref={iref3} rows="4" name="Message" placeholder="Message"/>
                <button>Send</button>
                <h6>{ok && "Thank you for Sending Me..."}</h6>
              </form>
            </div>
            
        </div>
              </div>
    )
}

export default Contact


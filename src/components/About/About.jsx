import React from 'react'
import "./about.scss"
import {AiOutlineExclamationCircle} from "react-icons/ai";
import about from "../../img/About.jpg";
import Ain from "../../img/ainshames.png"


function About() {
    return (
        <div className="About" id="About">
          <h1 className="title">
              < AiOutlineExclamationCircle className="icon" /> About Me
              </h1> 
              <div className="all">
              <div className="left">
                  <div className="overbg"></div>
                  <img src={about} alt="" />
              </div>
              
              <div className="Right">
                  <div className="textabout">
                      <h1>Abdelrhman</h1>
                      <h4>I studied In Ain Shames University</h4>
                      <img src={Ain} alt="" />
                  </div>
                  <div className="words">
                  <h2>
                    Front End Developer
                  </h2>
                     <p>Creative bilingual multilingual Front End Developer skilled at creating a unique customer experience that highlights brand messaging Drives customer experience improving click rates and conversion rates. Maintains up-to-date awareness of technological trends and technological advances Able to facilitate translation </p>
                  </div>
              </div>
              </div>
           
        </div>
    )
}

export default About

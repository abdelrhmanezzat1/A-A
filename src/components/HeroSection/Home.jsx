import React from 'react'
import "./Home.scss"
import Home3 from "../../img/1.png"
// import {BsEyeglasses} from "react-icons/bs";


function Home() {
    return (
        <div
        className="continaerHero" id="Home">
            <div className="Left">
                <div className="bioimg">
                <div className="overlay"></div>
                <img className="img" src={Home3} alt="" />
                </div>
            </div>
            <div className="Right">
                <div className="textinfo">

                <h3>Hii....,</h3>
                <h2>I'm Deveopler<span>A@A</span>...,</h2>
                <h3>Actually <span>A@A</span> MY Brand in Adverb..,</h3>
                <div className="info">
                    <div className="text">
                    <div className="title">Web Deveolper</div>
                    <div className="title">UI Desginer</div>
                    <div className="title">JavaScripT Deveolper</div>
                    <div className="title">UI / UX</div>
                    </div>
                </div>
                
                </div>
                
            </div>
           {/* <BsEyeglasses className="a" /> */}
        </div>
    )
}

export default Home

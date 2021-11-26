import React, {  useState } from 'react'
import { DataNav } from '../Data/DataNav'
import "./Navbar.scss"
import { AiFillChrome } from "react-icons/ai";
import {  GiCorkHat
} from "react-icons/gi";




function Navbar() {
    

    const [clik,setclick] =useState(false)
    
        const hendel = ()=>{
            setclick(!clik)
        }
    
    return (
        <>
        <div className="conteniar">
                <AiFillChrome className={clik ? "ham move":"ham"} onClick= {hendel}></AiFillChrome>
            <a href="#Home" className="Logo">A<font> <GiCorkHat className="hat"/>@</font>A</a>
            <nav className={clik ?"Nav colse" :"Nav"}>
                <ul>
                   {DataNav.map((item)=>{
                           return(
                            <li  key={item.id} onclick={()=>setclick(false)}>
                                    <a href={item.url}  className="links" onclick={()=>setclick(false)} >
                                    {item.title}
                                    </a>
                                </li>
                                )
                   })} 
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import "./testtmon.scss"
import {Li,RyanReynolds,RituArya,DwayneJohnson,GalGadot} from "../Data/Datatest"
import Controlli from './controlli/Controlli'
function Testmonials() {
    const [active,setactive] = useState("Ryan Reynolds")
    const [choes,setchoes] = useState([])
    useEffect(()=>{
        switch(active){
            case "Ryan Reynolds":
            setchoes(RyanReynolds);
            break;
            case "Dwayne Johnson":
            setchoes(DwayneJohnson);
            break;
            case "Ritu Arya":
            setchoes(RituArya);
            break;
            case "Gal Gadot":
            setchoes(GalGadot);
            break;
            default:
                setchoes(RyanReynolds);

        }
    },[active])
    return (
        <div className="Test" id="Testimonials">
            <h1 className="title">
            Testimonials
              </h1>
            <div className="con">
                <div className="Bar">
                    <ul>
                        {Li.map(li =>(
                             
                                <Controlli title={li.title} key={li.id} sle={active === li.title} set={setactive}/>
                            
                        ))}
                    </ul>
                </div>
                    <div className="container">
                        {choes.map(da=>(

                            <div className="item" key={da.id}>
                            
                            <div className="text">

                            <h3>{da.title}</h3>
                            <p>{da.des}</p>
                            </div>
                            <div className="img">
                            <h3>{da.title}</h3>
                            <img src={da.photo} alt="" />
                            </div>
                        </div>
                            ))}
                    </div>
            </div>
        </div>
    )
}

export default Testmonials

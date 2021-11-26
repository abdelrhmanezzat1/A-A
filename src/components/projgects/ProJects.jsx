import React from 'react'
import "./projects.scss"
import {dataCard} from "../Data/DataCard"
function ProJects() {
    return (
        <div className="pro" id="Projects">
            <h1 className="title">
               My Creative
              </h1> 
              <div className="allcards">
                  {dataCard.map((Data)=>{
                      return(
                          <div className="card" key={Data.id}>
                              <img src={Data.img} alt={Data.id} />
                          </div>
                      )
                  })


                      
                      
                  }
              </div>
             
        </div>
    )
}

export default ProJects

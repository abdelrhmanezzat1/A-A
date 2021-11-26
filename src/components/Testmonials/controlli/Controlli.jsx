import React from 'react'
import "./Controlli.scss"

function Controlli({title,sle,set}) {
    return (
        <li className={sle ? "li active" :"li"} onClick={()=>set(title)}>
            {title}
        </li>
    )
}

export default Controlli

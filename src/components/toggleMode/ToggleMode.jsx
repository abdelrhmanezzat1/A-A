import "./togglemode.scss"
import{BsMoon} from "react-icons/bs"
import { useContext } from "react"
import { darkTheme } from "../../Toggle"
import{BsMoonFill} from "react-icons/bs"

const ToggleMode = () => {
    const toggle = useContext(darkTheme)
    const change =()=>{
        toggle.dispatch({type:"DARK"})
    }
    return (
        <div className="toggle">
          {
            toggle.state.dark?(
                <BsMoonFill className="icon" onClick={change}/>
            ):(
                <BsMoon className="icon" onClick={change}/>
                )  
            }  
        </div>
    )
}

export default ToggleMode

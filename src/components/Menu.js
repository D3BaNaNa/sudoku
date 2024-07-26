import { useState } from "react"
import "../App.css"
import { Link } from "react-router-dom"

const Menu = () => {

    const toggleMenu = () => setMenuOn(prev => !prev)

    const [menuOn, setMenuOn] = useState(false)
    console.log(menuOn)

    if (!menuOn) {

        return (
            <div className="gameLeft">
        
                <div className="menuButton" onClick={toggleMenu}>
                    <p id="menuLine"><b>—</b></p>
                    <p id="menuLine"><b>—</b></p>
                    <p id="menuLine"><b>—</b></p>
                </div>

            </div>

        )

    } else {
        return (
            <div className="gameLeft">
                <div className="openMenu">
                    <p id="closeMenu" onClick={toggleMenu}>
                    x&nbsp;</p>
                    <Link to="/settings" className="link"
                    id="subMenuLink">&nbsp;Settings</Link>
                    <Link to="/help" className="link"
                    id="subMenuLink">&nbsp;Help</Link>

                    
                </div>
            </div>
        )


    }
    
    }

export default Menu;
import React from 'react'
import { Link } from 'react-router-dom'
import "./../../assets/style/nav.scss"
import headIcon from "./../../assets/images/logo.svg"


function Nav() {

    const style ={
        height : "50Px",
        width:"40px",
        transform: "translateY(15%)"
    }


    return (
        <div>
            <div className="nav_Container">
                <div className="nav_Image">
                    <img className="nav_image" style={style} src={headIcon} />
                </div>
                <div className="nav_right">
                    <div className="nav_item btn ">About</div>
                    <div className="nav_item btn ">Sign up</div>
                </div>
            </div>
        </div>
    )
}

export default Nav

import React, { useState } from 'react'

import "./../../assets/style/mainNav.scss"

import home from "./../../assets/images/feed/home.svg";
import search from "./../../assets/images/feed/search.svg";
import mic from "./../../assets/images/feed/Singing.svg";
import activity from "./../../assets/images/feed/activity.svg";
import profile from "./../../assets/images/profile_img.jpg";

function MainNav() {

    const [value,setValue]=useState("home")

    const add =(e)=>{
        if(e.target.tagName=="IMG" && !e.target.parentNode.className.includes("active") ){
            setValue(e.target.parentNode.id)
        }
        else if(e.target.tagName=="DIV" && e.target.id && !e.target.className.includes("active")){
            // e.target.className+="active"
            setValue(e.target.id)
        }
    }

    return (
        <div>
            <div className="main_Nav_container" onClick={add}>
                <div className={`home main_nav_item ${value==="home"?"active":""}`} id="home" >
                    <img src={home} className="home_icon icon" />
                </div>
                <div className={`search main_nav_item ${value==="search"?"active":""}`} id="search" >
                    <img src={search} className="search_icon icon" />
                </div>
                <div className={`mic main_nav_item ${value==="mic"?"active":""}`} id="mic">
                    <img src={mic} className="mic_icon icon" />
                </div>
                <div className={`activity main_nav_item ${value==="activity"?"active":""}`} id="activity">
                    <img src={activity} className="activity_icon icon" />
                </div>
                <div className={`profile main_nav_item ${value==="profile"?"active_profile":""} `} id="profile">
                    <img src={profile} className="profile_icon icon" />
                </div>
            </div>
        </div>
    )
}

export default MainNav

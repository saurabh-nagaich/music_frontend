import React from 'react'
import FirstScreen from './fisrtScreen/FirstScreen'

import "./../assets/style/effect.scss"

import M from "./../assets/images/M.svg";
import HeadPhone from "./../assets/images/head_phone.svg";
import SICO from "./../assets/images/SICO.svg";
import WhyWeUse from './fisrtScreen/WhyWeUse';
import Slider from './fisrtScreen/slider/Slider';

function Home() {
    return (
        <div>
            {/* if user is not logged in  */}
            <div className="back">

            <div className="effect_box">
                <div className="effect_first_screen ">
                    <img src={M} id="icon" className="M_icon" />
                    <img src={HeadPhone} id="icon" className="Head_Phone_icon" />
                    <img src={SICO} id="icon" className="sico_icon"/>
                </div>
            </div>
            </div>
            <WhyWeUse />
            <Slider />
            {/* <FirstScreen /> */}
        </div>
    )
}

export default Home

import React from 'react'

import "./../../assets/style/getStarted.scss"

import btn_grid_box from "./../../assets/images/btn_grid.svg"
import imageBorder from "./../../assets/images/imageBorder.svg"
import whyGrope from "./../../assets/images/whyGrope.svg"
import iconOShap from "./../../assets/images/this_path.svg"

function WhyWeUse() {
    return (
        <div className="box_container contanier">
            <div className="text_area partetion">
                <div className="heading">
                    Why do we Use it ?
                </div>
                <div className="paragraf para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </div>
                <div className="get_started_btn">
                    <div className="btn_title">Get Started</div>
                    <img src={btn_grid_box} className="btn_grid_box" />
                </div>
                <img src={iconOShap} id="shap_elipse" />
            </div>
            <div className="image_area partetion">
                <img src={whyGrope} className="about_image" />
                <img src={imageBorder} className="image_border" />
            </div>
        </div>
    )
}

export default WhyWeUse

import React from 'react';
import "./slider_slide.scss"

function ImgComp({src,id}){
    let imgStyles={
        width:100+"%",
        height:100+ "%"
    }
    
    return (
        <div className="slider_slide">
            <div className="silder_text_area section">
                <div className="heading" style={{"font-weight":"bold"}}>Collab</div>
                <div className="paragraf para" id="PARAGRA">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, exercitationem. Officia, quo error cupiditate aperiam numquam quas dolore ea placeat ad similique nisi voluptatum veritatis laborum iusto. Provident, tenetur. Quaerat.
                </div>
            </div>
            <div className="image_area section">
                <img src={src} alt="slide-img" className="slider-img" id={id} />
            </div>
            
        </div>
    )
}
export default ImgComp;
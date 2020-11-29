import React from 'react'
import image1 from "./../../assets/images/slider_img.svg"
import "./../../assets/style/firstScreen.scss"

function FirstScreen() {
    return (
        <div>
            <div className="contanier">
                <div className="screen_Left partetion">
                    <div className="text_of_first_screen">
                        <div className="Heading">
                            Collab
                        </div>
                        <div className="para">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, exercitationem. Officia, quo error cupiditate aperiam numquam quas dolore ea placeat ad similique nisi voluptatum veritatis laborum iusto. Provident, tenetur. Quaerat.
                        </div>
                    </div>
                </div>
                <div className="screen_Right partetion">
                    <div className="First_screen_svg">
                        <img style={{
                            position:"relative",
                            width:"100%"
                        }} src={image1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstScreen

import React, {useEffect, useState } from 'react';
import "./Slider.scss";
import ImgComp from "./ImgComp";

import arrowBlack from "./../../../assets/images/arrow-1.svg"
import arrowFade from "./../../../assets/images/arrow.svg"
// import i1 from "./../../../assets/images/slider_img.svg"

import i1 from "./../../../assets/images/slider_img.svg"
import i2 from "./../../../assets/images/ticket.png"
import i3 from "./../../../assets/images/rock_band.svg"



function Slider(){
    // array for component to show inside the slider 

    const [display,setDisplay]=useState(arrowBlack)
    const [RightArrow,setRightArrow]=useState(arrowBlack)
    const [circle,setCircle]=useState("one")
   // add components to array

    let sliderArr =[
        <ImgComp src={i1} id="puzzal" />,
        <ImgComp src={i3} id="rock_band" />,
        <ImgComp src={i2} id="ticket" />,
        
    ]
    const [x,setX]=useState(0);

    const gotoLeft=()=>{
        //if we want to continus scrolling just change setX(x) with setX(-100*(sliderArr.length-1))
        x===0?setX(x):setX(x+100);

    }
    
    const gotoRight=()=>{
        //if we want to continus scrolling just change setX(x) with setX(0)
        x===-100*(sliderArr.length-1)?setX(x):setX(x-100);
        
    }
    
    // setInterval(gotoRight,3000);
    
    
    useEffect(()=>{
        // console.log(x)
        if( x==-100){
            setCircle("two")
        }else if(x==-200){
            setCircle("three")
        }else{
            setCircle("one")
        }


        x===0?setDisplay(arrowFade):setDisplay(arrowBlack); 
        x===-100*(sliderArr.length-1)?setRightArrow(arrowFade):setRightArrow(arrowBlack);
        
        
    },[gotoRight,gotoLeft])




    return(
        <div className="slider">
            {
                sliderArr.map((item,index)=>{
                    return (
                        <div key={index} class="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }

            // buttons
            <div className="slider_pointer">
                <button id="gotoLeft" onClick={gotoLeft}><img src={display} /></button>
                <div className="circle" style={{background:`${circle==="one"?"black":"none"}`}} />
                <div className="circle" style={{background:`${circle==="two"?"black":"none"}`}} />
                <div className="circle" style={{background:`${circle==="three"?"black":"none"}`}} />
                <button id="gotoRight"onClick={gotoRight} ><img src={RightArrow}  /></button>
            </div>

        </div>
    );

}

export default Slider;
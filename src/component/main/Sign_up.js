import React, { useState } from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

import "./../../assets/style/sign_up.scss"

import letsLink from "./../../assets/images/Lets_Connect.svg"
import imageLink from "./../../assets/images/Group_13.svg"
import iconOShap from "./../../assets/images/Path_442.svg"


function Sign_up() {
    
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState()
    
    const [sign_page,setPage] = useState("sign_up")
    // console.log(userName,email,password)

    const sign_up = () =>{
        if(userName && password && email){
            const obj={
                userName ,
                email,
                password
            }
            console.log(obj)
    
        }
        setUserName(()=>"");
        setEmail(()=>"");
        setPassword(()=>null)
    }
    const sign_In = () =>{
        if((userName||email) && password){
            const obj={
                userName ,
                email,
                password
            }
            console.log(obj)
    
        }
        setUserName(()=>"");
        setEmail(()=>"");
        setPassword(()=>null)
    }

    return (
        <div>
            <div className="contener">
                <div className="Sign_up_left">
                    <div className="shap"></div>
                    <img src={letsLink}  id="lets_Connect"/>
                    <img src={iconOShap} id="bg_shap"  />
                    <img src={imageLink} id="connect_image" />
                </div>
                <div className="Sign_up_right">
                    <div className={`sign_up_box ${sign_page}` }>
                        <div className="sign_up_heading">Sign Up</div>
                        <div class="input ">
                            <input class="input_area" type="text" placeholder="" onChange={e=>setUserName(e.target.value)} />
                            <div >
                                <span class="icon">
                                        <SupervisorAccountIcon id="icon"/>
                                </span>
                                <label className={`label ${userName?"stop":null} `}>User Name</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="email" value={email}  placeholder="" onChange={e=>setEmail(e.target.value)} />
                            <div >
                                <span class="icon">
                                        <EmailSharpIcon  id="icon" />
                                </span>
                                <label className={`label ${email?"stop":null} `}>Email</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="password" value={password} placeholder="" onChange={e=>setPassword(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <VpnKeyOutlinedIcon id="icon" />
                                </span>
                                <label className={`label ${password?"stop":null} `}>Password</label>
                            </div>
                        </div>
                        <div className="signUp_btn" onClick={sign_up} >Sign up</div>
                        <div className="login_link_line">Already have an account ? <span className="log" onClick={()=>sign_page==="sign_in"?setPage(""):setPage("sign_in")}>Log in</span></div>
                        <div className="sign_up_bottom">
                            <hr />
                            <div className="or">or</div>
                            <hr />
                        </div>
                    </div>
                    <div className={`sign_in_box  ${sign_page === "sign_up"?null:"login_page"}`}>
                        <div className="sign_up_heading">Sign In</div>
                        <div class="input ">
                            <input class="input_area" type="text" placeholder="" onChange={e=>setUserName(e.target.value)} />
                            <div >
                                <span class="icon">
                                        <SupervisorAccountIcon id="icon"/>
                                </span>
                                <label className={`label ${userName?"stop":null} `}>User Name</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="text" placeholder="" onChange={e=>setPassword(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <VpnKeyOutlinedIcon id="icon" />
                                </span>
                                <label className={`label ${userName?"stop":null} `}>Password</label>
                            </div>
                        </div>
                        <div className="signUp_btn" onClick={sign_In} >Sign In</div>
                        <div className="login_link_line">create new account ? <span className="log" onClick={()=>sign_page==="sign_up"?setPage(""):setPage("sign_up")}>Sign Up</span></div>                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sign_up
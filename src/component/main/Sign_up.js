import React, { useState } from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

import emailImg from "./../../assets/images/gmail.svg"
import passwordImg from "./../../assets/images/password.svg"
import user from "./../../assets/images/user.svg"

import "./../../assets/style/sign_up.scss"

import letsLink from "./../../assets/images/Lets_Connect.svg"
import imageLink from "./../../assets/images/SignUp.svg"
import iconOShap from "./../../assets/images/Path_442.svg"
import { createNewUser, login } from '../../redux';
import { connect } from 'react-redux';


function Sign_up(props) {
    
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
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
            props.signup_Fun(obj);
            setUserName(()=>"");
            setEmail(()=>"");
            setPassword(()=>"")
    
        }
    }
    const sign_In = () =>{
        if((userName||email) && password){
            const obj={
                userName,
                email,
                password
            }
            console.log(obj)
            props.login_Fun(obj); 
        }
        setUserName(()=>"");
        setEmail(()=>"");
        setPassword(()=>"")
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
                            <input class="input_area" type="text" placeholder="" value={userName} onChange={e=>setUserName(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <img src={user} id="image_icon" />
                                        {/* <SupervisorAccountIcon id="icon"/> */}
                                </span>
                                <label className={`label ${userName?"stop":null} `}>User Name</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="email" value={email}  placeholder="" onChange={e=>setEmail(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <img src={emailImg} id="image_icon" />
                                        {/* <EmailSharpIcon  id="icon" /> */}
                                </span>
                                <label className={`label ${email?"stop":null} `}>Email</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="password" value={password} placeholder="" onChange={e=>setPassword(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <img src={passwordImg} id="image_icon" />

                                    {/* <VpnKeyOutlinedIcon id="icon" /> */}
                                </span>
                                <label className={`label ${password?"stop":null} `}>Password</label>
                            </div>
                        </div>
                        <div className="signUp_btn btn" onClick={sign_up} >Sign up</div>
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
                            <input class="input_area" type="text" placeholder="" value={userName} onChange={e=>setUserName(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <img src={user} id="image_icon" />
                                        {/* <SupervisorAccountIcon id="icon"/> */}
                                </span>
                                <label className={`label ${userName?"stop":null} `}>User Name</label>
                            </div>
                        </div>
                        <div class="input ">
                            <input class="input_area" type="password" value={password} placeholder="" onChange={e=>setPassword(e.target.value)} />
                            <div >
                                <span class="icon">
                                    <img src={passwordImg} id="image_icon" />
                                    {/* <VpnKeyOutlinedIcon id="icon" /> */}
                                </span>
                                <label className={`label ${password?"stop":null} `}>Password</label>
                            </div>
                        </div>
                        <div className="signUp_btn btn" onClick={sign_In} >Sign In</div>
                        <div className="login_link_line">create new account ? <span className="log" onClick={()=>sign_page==="sign_up"?setPage(""):setPage("sign_up")}>Sign Up</span></div>                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        login_status:state.login,
        signup_status_status:state.signup,
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        login_Fun:()=>dispatch(login()),
        signup_Fun:()=>dispatch(createNewUser()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sign_up)

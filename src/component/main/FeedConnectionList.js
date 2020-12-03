import React from 'react'

import "./../../assets/style/feedConnection.scss"

import post_profile_img from "../../assets/images/profile_img.jpg"
import ConnectionListMember from './ConnectionListMember'



function FeedConnectionList() {
    return (
        <div>
            <div className="connection_box">
                <div className="connection_user ">
                    <div className="connection_profile_img">
                        <img src={post_profile_img} className="connection_profile_img"/>
                    </div>
                    <div className="user_title"> Connection</div>
                </div>
                <div className="connection_List">
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                    <ConnectionListMember />
                </div>
            </div>
        </div>
    )
}

export default FeedConnectionList

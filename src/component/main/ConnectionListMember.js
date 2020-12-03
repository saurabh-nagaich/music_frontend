import React from 'react'
import post_profile_img from "../../assets/images/profile_img.jpg"
import connection_btn_icon from "../../assets/images/feed/connection_btn_icon.svg"
import btn_grid from "../../assets/images/btn_grid.svg"



function ConnectionListMember() {
    return (
        <div className="list_item">
            <div className="connection_user">
                <div className="feed_post_nav" id="connection_item">
                    <div className="feed_post_profile_img">
                        <img src={post_profile_img} className="post_profile_img"/>
                    </div>
                    <div className="feed_connection_profile_title">H_mbn_</div>
                </div>
                <div className="connection_btn">
                    <div className="text_part">
                        <img src={connection_btn_icon} className="connection_btn_icon" />
                        <div className="connection_btn_text">Collab</div>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default ConnectionListMember

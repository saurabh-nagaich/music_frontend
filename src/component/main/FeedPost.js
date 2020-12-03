import React from 'react'

import "./../../assets/style/feed_post.scss";

import post_profile_img from "../../assets/images/profile_img.jpg"
import post_img from "../../assets/images/music-art.jpg"
import like_icon from "../../assets/images/feed/like.svg"
import comment_icon from "../../assets/images/feed/comment.svg"

function FeedPost() {
    return (
        <div>
            <div className="feed_post_continer">
                <div className="feed_post_nav">
                    <div className="feed_post_profile_img">
                        <img src={post_profile_img} className="post_profile_img"/>
                    </div>
                    <div className="feed_post_profile_title ">H_mbn_</div>
                </div>
                <div className="feed_post_img">
                    <img src={post_img} className="post_img"/>
                </div>
                <div className="feed_post_discription">
                    <div className="feed_post_discroption_title">Lorem ipsum dolor sit amet....</div>
                    <div className="feed_post_discroption_icon">
                        <img src={like_icon} className="like_icon feed_icon"/>
                        <img src={comment_icon} className="comment_icon feed_icon"/>
                    </div>
                    <div className="feed_post_discroption_date">
                        Nov 8, 2020
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedPost

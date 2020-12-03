import React from 'react'
import FeedNav from './FeedNav'
import FeedPost from './FeedPost'

import "./../../assets/style/feedPage.scss"
import FeedConnectionList from './FeedConnectionList'

function FeedPage() {
    return (
        <div className="feed_page">
            <div className="feedPageNav">
                <FeedNav /> 
            </div>
            <div className="feedpagePost">
                <FeedPost />
            </div>
            <div className="feedpageConnection">
                <FeedConnectionList />
            </div>
        </div>
    )
}

export default FeedPage

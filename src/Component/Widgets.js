import React from 'react'
import '../Styling/Widgets.css';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
             <SearchIcon className=""widgets-searchIcon/>
             <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets-container">
             <h2>What's happening</h2>
             
             <TwitterTweetEmbed tweetId={"1447949844"}/>
             <TwitterTimelineEmbed
             sourceType="profile"
             screenName="Himansh74668538"
             options={{height:400}}
             />
           <TwitterShareButton
            url={"https://www.facebook.com/vansh.rajput.71066"}
            options={{text:"#React js is awesome", via:"Himanshu74668538"}}/>
            </div>

        </div>
    )
}

export default Widgets

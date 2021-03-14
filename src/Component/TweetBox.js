import React,{useState} from 'react'
import {Avatar, Button} from '@material-ui/core';
import '../Styling/TweetBox.css';
import db from '../firebase';
function TweetBox() {
    const [tweetmessage,setTweetMessage]=useState("");
    const [tweetimage,setTweetImage]=useState("");

    const sendTweet=(e)=>{
      e.preventDefault();
       db.collection('posts').add({
            displayName:'Sunny singh',
            username:'sunnysinghbeta',
            verified:true,
            text:tweetmessage,
            image:tweetimage,
            avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu8Wab-H-NHWWt6CRlpFqRGix90a9w3Sm3SLX35fBw=s83-c-mo"
       });

       setTweetMessage("");
       setTweetImage("");
    }
    return (
        <div className="tweetbox">
            <form>
             <div className="tweetbox-input">
              <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8Wab-H-NHWWt6CRlpFqRGix90a9w3Sm3SLX35fBw=s83-c-mo" alt=""/>
              <input 
              onChange={e=>setTweetMessage(e.target.value)}
              value={tweetmessage} placeholder="What's happening?" type="text"/>    
             </div>
             <input 
             value={tweetimage}
             onChange={e=>setTweetImage(e.target.value)}
             className="tweetbox-imageinput"
             placeholder="Enter image URL"
             type="text"
             />
             <Button onClick={sendTweet} className="tweetbox-btn">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox; 

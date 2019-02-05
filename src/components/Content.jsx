import React from 'react';


const Body =(props) => 
<div>
<div><a href={`https://www.reddit.com${props.val.permalink}`} target="_blank" rel="noopener noreferrer" >{props.val.title}</a></div>
<div><a href={`https://www.reddit.com/${props.val.subreddit_name_prefixed}`} target="_blank" rel="noopener noreferrer">{props.val.subreddit_name_prefixed}</a>Posted by {props.val.author}</div>
</div>


export default Body;
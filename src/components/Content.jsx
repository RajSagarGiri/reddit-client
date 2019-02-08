import React from 'react';
import '../styles/content.css';

const Body =(props) => 
<div className='content'>


<span>{props.val.score}</span>

<div className='ref'>
<a href={`https://www.reddit.com/${props.val.subreddit_name_prefixed}`} target="_blank" rel="noopener noreferrer">
{props.val.subreddit_name_prefixed}
</a> . 
Posted by  <a href={`https://www.reddit.com/user/${props.val.author}`} target="_blank" rel="noopener noreferrer"> {props.val.author}
 </a>
 </div>

 <div className='title'>
<a href={`https://www.reddit.com${props.val.permalink}`} target="_blank" rel="noopener noreferrer" >{props.val.title}</a>
</div>

<div className='bottom'>
<a href={props.val.url} target="_blank" rel="noopener noreferrer">Content Link</a>
 <span><img src='comment.png' alt='hell'/> {props.val.num_comments} comments</span>
 </div>


</div>


export default Body;
import React from 'react';
import '../styles/content.css';

const Body =(props) => 
<div className='content'>

<div className='thumb'>
<a href={props.val.url} target="_blank" rel="noopener noreferrer">
<img src={props.val.thumbnail.indexOf('http')===0? props.val.thumbnail: `external.png`} alt='hell'/>
</a>
</div>

<div className='text'>

<div className='ref'>
<a href={`https://www.reddit.com/${props.val.subreddit_name_prefixed}`} target="_blank" rel="noopener noreferrer">
{props.val.subreddit_name_prefixed}
</a> . 
Posted by  
<a href={`https://www.reddit.com/user/${props.val.author}`} target="_blank" rel="noopener noreferrer">
{` ${props.val.author}`}
</a>
</div>

<div className='title'>
<a href={`https://www.reddit.com${props.val.permalink}`} target="_blank" rel="noopener noreferrer" >
{props.val.title.split('.')[0]}.
</a>
</div>

<div className='bottom'>
<span>
<span>{props.val.num_comments} comments</span>
<span><img src='up.png' alt='hell'/>{props.val.score}</span>
</span>
</div>

 </div>

</div>


export default Body;
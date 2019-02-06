import React from 'react';
import '../styles/content.css';

const Body =(props) => 
<tr>
<td>
<a href={`https://www.reddit.com${props.val.permalink}`} target="_blank" rel="noopener noreferrer" >
<td><span><img src='https://i.imgur.com/xKUQmkk.png' alt='upvote'/>  {props.val.score} </span></td>

<td>
{props.val.title}
<a href={props.val.url} target="_blank" rel="noopener noreferrer">{props.val.url.split('//').slice(1).join('')}</a>
<br/>
<a href={`https://www.reddit.com/${props.val.subreddit_name_prefixed}`} target="_blank" rel="noopener noreferrer" className='ref'>
{props.val.subreddit_name_prefixed}
</a> | 
Posted by  <a href={`https://www.reddit.com/user/${props.val.author}`} target="_blank" rel="noopener noreferrer">
 {props.val.author}
 </a> | {props.val.num_comments} comments.
 </td>
 </a>
 </td>
</tr>


export default Body;
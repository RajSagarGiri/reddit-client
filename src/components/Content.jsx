import React from 'react';
import '../styles/content.css';

const Body =(props) => 
<tr className='main'>
<tr>
<td>
<img src='up.png' alt='hell'/>
</td>
<td>
<a href={`https://www.reddit.com${props.val.permalink}`} target="_blank" rel="noopener noreferrer" >
    {props.val.title}
</a>
</td>
<td>
<span><a href={props.val.url} target="_blank" rel="noopener noreferrer">{props.val.url.split('//').slice(1).join('')}</a></span>
</td>
</tr>
<tr>
    <td>
    {props.val.score}
    </td>
    <td>
    <a href={`https://www.reddit.com/${props.val.subreddit_name_prefixed}`} target="_blank" rel="noopener noreferrer">
{props.val.subreddit_name_prefixed}
</a>
<span>.</span>
 <a href={`https://www.reddit.com/user/${props.val.author}`} target="_blank" rel="noopener noreferrer">
 Posted by {props.val.author}
 </a>
    </td>
</tr>
<tr>
    <td><img src='down.png' alt='hell'/></td>
    <td>{props.val.num_comments}</td>
    </tr>
</tr>


export default Body;
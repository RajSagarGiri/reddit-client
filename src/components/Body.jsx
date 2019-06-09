import React from 'react';
import '../styles/content.css';

const Body = ({ val }) => (
  <div className='content'>
    <div className='thumb'>
      <a href={val.url} target='_blank' rel='noopener noreferrer'>
        <img src={val.thumbnail} alt='' />
      </a>
    </div>
    <div className='text'>
      <div className='ref'>
        <a
          href={`https://www.reddit.com/${val.subreddit_name_prefixed}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {val.subreddit_name_prefixed}
        </a>{' '}
        . Posted by
        <a
          href={`https://www.reddit.com/user/${val.author}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {` ${val.author}`}
        </a>
      </div>

      <div className='title'>
        <a
          href={`https://www.reddit.com${val.permalink}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {val.title.split('.')[0]}.
        </a>
      </div>

      <div className='bottom'>
        <span>
          <span>{val.num_comments} comments</span>
          <span>
            <img src={require('../images/up.png')} alt='' />
            {val.score}
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default Body;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FeedContext } from '../Context';
import Header from './Header';
import Content from './Content';
import { options } from '../helpers/options';

const Main = () => {
  const [stories, setStory] = useState(null);
  const [selected, changeSelect] = useState(options[0].value);
  const { feedList, dispatch } = useContext(FeedContext);

  const home = async () => {
    try {
      const { data } = await axios.get(
        `https://www.reddit.com/r/${selected}.json`
      );

      const posts = data.data.children
        .map(p => p.data)
        .filter(p => p.thumbnail_height);

      setStory(posts);
      dispatch({ type: 'ADD', key: selected, posts });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const matchData = feedList[selected];
    if (matchData) {
      setStory(matchData);
    } else {
      home();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div>
      <Header
        handleChange={({ value }) => {
          if (value !== selected) {
            changeSelect(value);
            setStory(null);
          }
        }}
        options={options}
      />
      {stories ? (
        stories.length ? (
          <Content stories={stories} />
        ) : (
          <>
            <img
              src={require('../images/bug.gif')}
              alt='loading...'
              className='bug'
            />
            <span id='errortext'>No posts with image found</span>
          </>
        )
      ) : (
        <img
          src={require('../images/spinner.gif')}
          alt='loading...'
          className='spinner'
        />
      )}
    </div>
  );
};

export default Main;

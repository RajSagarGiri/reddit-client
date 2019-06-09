import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { options } from '../helpers/options';
import { updateData, fetchData } from '../helpers/localStorage';
import Content from './Content';

const App = () => {
  const [stories, setStory] = useState(null);
  const [selected, changeSelect] = useState(options[0].value);

  const home = async () => {
    try {
      const { data } = await axios.get(
        `https://www.reddit.com/r/${selected}.json`
      );

      const reformedData = data.data.children
        .map(p => p.data)
        .filter(p => p.thumbnail_height);

      setStory(reformedData);
      updateData(selected, reformedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const matchData = fetchData(selected);
    if (matchData) {
      setStory(JSON.parse(matchData));
    } else {
      home();
    }
  }, [selected]);

  return (
    <div>
      <Header
        handleChange={e => {
          changeSelect(e.value);
          setStory(null);
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

export default App;

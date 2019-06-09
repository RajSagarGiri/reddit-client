import React from 'react';
import Body from './Body';

const Content = ({ stories }) => {
  return (
    <div style={{ margin: '20px 10vw 20px  10vw' }}>
      {stories.map((i, j) => (
        <Body val={i} key={j} />
      ))}
    </div>
  );
};

export default Content;

import React from 'react';
import FeedProvider from '../Context';
import Main from './Main';

export default function App() {
  return (
    <div className='App'>
      <FeedProvider>
        <Main />
      </FeedProvider>
    </div>
  );
}

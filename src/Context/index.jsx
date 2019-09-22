import React, { createContext, useReducer } from 'react';
import FeedReducer from './reducer';

export const FeedContext = createContext();

export default function FeedProvider(props) {
  const [feedList, dispatch] = useReducer(FeedReducer, {});
  return (
    <FeedContext.Provider value={{ feedList, dispatch }}>
      {props.children}
    </FeedContext.Provider>
  );
}

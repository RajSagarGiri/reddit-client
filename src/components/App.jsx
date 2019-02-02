import React, { Component } from 'react';
import '../styles/app.css';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <div className='contents'></div>
      </div>
    );
  }
}

export default App;

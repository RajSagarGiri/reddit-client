import React, { Component } from 'react';
import '../styles/app.css';
import Header from './Header';
import Body from './Content';

class App extends Component {

  constructor(){
    super();
    this.state={stories:[], keyword:null}
  }

  action = async (event) => {
    event.preventDefault();
    const key = event.target.elements.key.value;
    const api = await fetch(`http://www.reddit.com/search.json?q=${key}`);
    const get = await api.json();
    const data = await get.data.children.map(data => data.data)
    this.setState({stories : data, keyword:key})
    console.log(this.state.stories)
  }

  render() {
   const val = this.state.stories.map(i => <Body val={i}/>)
    return (
      <div >
        <Header action={this.action}/>
        {this.state.stories.length>0 &&<div style={{margin:'0 100px 0  100px'}}>
         {val}
         </div>}
      </div>
    );
  }
}

export default App;

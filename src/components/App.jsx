import React, { Component } from 'react';
import Header from './Header';
import Body from './Content';

class App extends Component {

  constructor(){
    super();
    this.state={stories:[]}
  }

  action = async (event) => {
    event.preventDefault();
    const key = event.target.elements.key.value;
    const api = await fetch(`http://www.reddit.com/search.json?q=${key}&limit=25`);
    const get = await api.json();
    const data = await get.data.children.map(data => data.data);
    this.setState({stories : data});
  }

  home = async() =>{
    const api = await fetch(`https://www.reddit.com/hot.json`);
    const get = await api.json();
    const data = await get.data.children.map(data => data.data);
    this.setState({stories : data});
  }

componentDidMount(){
   this.home();
}



  render() {
   const val = this.state.stories.map(i => <Body val={i}/>)
    return (
      <div >
        <Header action={this.action} stories={this.state.stories} home={this.home}/>
        {this.state.stories.length>0 &&<div style={{margin:'20px 10vw 20px  10vw'}}>
         {val}
         </div>}
      </div>
    );
  }
}

export default App;

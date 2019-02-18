import React, {Component} from 'react';

// import NavBar from "./NavBar"
import MainContent from "./MainContent"
// import Footer from "./Footer"
import data from "./JSON.js"

import './App.css';

const posts = 
    data.map(post => <MainContent key={post.id} punchline={post.title} question={post.body} />);

class App extends Component {
  render() {
    return (
      <div>
        {posts}
      </div>
    )
  }
};


export default App;
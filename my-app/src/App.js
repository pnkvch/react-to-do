import React from 'react';

// import NavBar from "./NavBar"
import MainContent from "./MainContent"
// import Footer from "./Footer"

import './App.css';

const data = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()).then(json => console.log(json));

const posts = data.map(post => <MainContent key={post.id} punchline={post.title} question={post.body} />)

function App() {
  return (
    <div>
      {posts}
    </div>
  )
};


export default App;
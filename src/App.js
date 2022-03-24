import './App.css';
import bootstrap from 'bootstrap';
import React, { useState } from "react";
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts';
import NavBar from './Components/NavBar';






function App() {
  const [posts, setPosts] = useState([
    { name: "", comment: "Test" },
    { name: "", comment: "Test" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }
  return (
    <div className='App'>
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border-nav">
          <NavBar />  
          </div>
        </div>
      </div>
      <main>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="border-box">
              <CreatePost addNewPostProp={addNewPost} />
            </div>
            <div className="border-box">
              <DisplayPosts post={posts} />
            </div>
          </div>
        </div>
      </main>
    </div>
   
 

    
    </div>
  );
}

export default App;

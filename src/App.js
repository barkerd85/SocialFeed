import './App.css';
import React, { useState } from "react";
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts';
import NavBar from './Components/NavBar';






function App() {
  const [posts, setPosts] = useState([
    ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }
  return (
    <div className='App'>
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <div className='border-nav'>
          <NavBar />
          
          </div>
          
        </div>
      </div>
      <main>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='border-box'>
              <CreatePost addNewPost={addNewPost} />
            </div><br/><br/>
              <div className='border-box'>
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
 

    
    
  

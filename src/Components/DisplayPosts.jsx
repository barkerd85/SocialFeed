import Post from './Post';
import './DisplayPosts.css';
import React from 'react';




const DisplayPosts = (props) => {

  return (
    <table className='table'>
      <thead className='thread-dark'>
        <tr>
        <h2>Recent Post</h2>
        </tr>
      </thead>
      <tbody>
              {props.post.map((post, index) => {
        return (
            <tr key={index}>
            <Post post={post} />
            </tr>
        );
      })
    }
      </tbody>
    </table>
  );
};

export default DisplayPosts;

          

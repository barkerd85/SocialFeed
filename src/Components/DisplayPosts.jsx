import React, { useState } from 'react';
import Post from './Post';




const DisplayPosts = (props) => {

  return (
    <table className='table'>
      <thead className='thread-dark'>
        <tr>
          <th>Recent Post</th>
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

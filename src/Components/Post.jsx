import './Post.css'
import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';










const Post = (props) => {




const [likeactive, setLikedactive] = useState(false);
const [dislikeactive, setDislikedactive] = useState(false);
const today = new Date();
const date = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`







function likePost(){
  if (likeactive){
    setLikedactive(false)
  } else{
    setLikedactive(true)
    if(dislikeactive){
      setDislikedactive(false)
    }
  }
}


function dislikePost(){
  if (dislikeactive){
    setDislikedactive(false)
  } else{
    setDislikedactive(true)
    if(likeactive){
      setLikedactive(false)
    }
  }
}

  return (


    <td>
      <div>
        <h3 className='col'>{props.post.name}</h3>
        <h4 className='col'>{props.post.comment}</h4>
        <p>{today.toDateString()}</p>
        <div>
        <h5>{date}</h5>
        
       
        
        <br />
        <button className={likeactive ? 'like': "" } onClick={likePost} >
         <FaThumbsUp />
        </button>
        <button className={dislikeactive ? 'dislike': ""} onClick={dislikePost}>
        <FaThumbsDown/>
        </button>
        
        </div>
      </div>
      <div>
       
      </div>
    </td>
  );
};

export default Post; 
        
        
        

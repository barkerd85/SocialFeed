import React, { useState } from 'react';
import { DateTime } from 'react-datetime-bootstrap';
import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import './Post.css'



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
        <p className='col'>{props.post.comment}</p>
        <div>
        <DateTime inputProps={{className:'datetime'}} />
        <br />
        <button className={[likeactive ? 'like': null, '' ].join('')} onClick={likePost} >
          
        <FaThumbsUp />
        </button>
        <button className={[dislikeactive ? 'dislike': null, '' ].join('')} onClick={dislikePost}>
        <FaThumbsDown/>
        </button>
        
        </div>
      </div>
    </td>
  );
};

export default Post;
        
        

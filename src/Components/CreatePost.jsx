import React, { useState } from 'react';
import './CreatePost.css'



const CreatePost = (props) => {

const [name, setName] = useState('');
const [comment, setComment] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        name: name,
        comment: comment
    };
    props.addNewPostProp(newPost);
}

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
            <label className='form-name'>Name:</label>
            <input class="form-control form-control-lg" type="text" placeholder="....." value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
            <label className='form-name'>New Post:</label>
            <textarea type='text' className='form-control' value={comment} onChange={(event) => setComment(event.target.value)} />
            </div><br />
            <button type='submit' class="btn btn-success" >Post</button>
        </form>
     );
}
 
export default CreatePost;
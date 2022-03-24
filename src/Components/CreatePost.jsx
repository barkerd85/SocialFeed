import React, { useState } from 'react';
import './CreatePost.css'



const CreatePost = (props) => {

const [name, setName] = useState('');
const [comment, setComment] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
        name: name,
        comment: comment
    };
    props.addNewPostProp(newEntry);
}

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
            <label className='form-name'>Name:</label>
            <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
            <label className='form-name'>Post:</label>
            <textarea type='text' className='form-control' value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary button-style" >Submit</button>
        </form>
     );
}
 
export default CreatePost;
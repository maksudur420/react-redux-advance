import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

import { postAdded } from './postsSlice'
import './posts.css'

const AddPostForm = () => {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [userId,setUserId] =useState('')
    const users = useSelector(selectAllUsers)
    const dispatch =useDispatch()


    const onTitleChange =(e)=>{
        setTitle(e.target.value)
    }
    const onPostContent =(e)=>{
        setContent(e.target.value)
    }
    const handleSelectChange =(e)=>{

      setUserId(e.target.value)
    }

    const onSavePost =()=>{
        if (title && content) {
            dispatch(postAdded(title, content,userId))
        }
        setTitle('')
        setContent('')
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user=>(
      <option key={user.id} value={user.id} >
        {user.name}
      </option>
    ))

  return (
    <div style={{textAlign:'center'}}>
      <section>
        <h1>Add a New Post</h1>
        <form >
            <label className='btn' htmlFor="postTitle">Post Title :</label><br/>
            <input
            className='btn'
             type="text" 
             id='postTitle'
             name='postTitle'
             value={title}
             onChange={onTitleChange}
             /><br/>

             <label htmlFor="postAuthor">Author Name: </label>
             <select id="postAuthor"onChange={handleSelectChange} value={userId}>
              <option value="">
              </option>
                {userOptions}
             </select><br/>

            <label className='btn-text' htmlFor="postContent">Post Content :</label><br/>
            <textarea  name="postContent" id="postContent" value={content} onChange={onPostContent} cols="40" rows="10"></textarea><br/>
            <button className='btn' onClick={onSavePost} type='button' disabled={!canSave}>Save Post</button>
        </form>
      </section>
    </div>
  )
}

export default AddPostForm

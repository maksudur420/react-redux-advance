import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdd } from './postsSlice'

const reactionImoji ={
    thumbsUp:0,
    wow:0,
    heart:0,
    rocket:0,
    coffee:0
}

const ReactionButton = ({post}) => {
    const dispatch =useDispatch();

    const reactionButtons = Object.entries(reactionImoji).map(([name,emoji])=>{
       return(
        <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={()=>{dispatch(reactionAdd({postId:post.id, reaction:name}))}}
        
        
        >
            {emoji} {post.reactions[name]}
        </button>

       )
    })
  return <div>{reactionButtons}</div>
}

export default ReactionButton

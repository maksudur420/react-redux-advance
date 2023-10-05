import React from 'react'
import './posts.css'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuth from './PostAuth';
import PostDuration from './PostDuration';
import ReactionButton from './ReactionButton';

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const postsOrder = posts.slice().sort((a, b) =>b.date.localeCompare(a.date))

    const postList =postsOrder.map(post=>{

        return(
            <article className='card' key={post.id}>
                <h1>{post.title}</h1>
                <PostAuth key={post.id} userId={post.userId}></PostAuth>
                <PostDuration timestamp={post.date}></PostDuration>
                <p>{post.content.substring(0, 100)}</p>
                <ReactionButton post ={post}></ReactionButton>
            </article>
        )
    })

  return (
    <div className='container'>
      {postList}
    </div>
  )
}

export default PostsList

import React from 'react'
import { useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';

const PostAuth = ({userId}) => {
   
    
    const users = useSelector(selectAllUsers);
    
    
    const author = users.find(user=>user.id === parseInt(userId))
   
  return (
    <div>
      <span>Author By :{author? author.name :"Unknown Author"}</span>
    </div>
  )
}

export default PostAuth

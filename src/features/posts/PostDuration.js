import React from 'react'
import { parseISO,formatDistanceToNow } from 'date-fns'

const PostDuration = ({timestamp}) => {
    let timeAgo ="";
    if (timestamp) {
        const date = parseISO(timestamp);
        const distanceTime = formatDistanceToNow(date);
        timeAgo =`${distanceTime} ago`
    }
  return (
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default PostDuration

import React from 'react'


type PostCounterProps = {
    count: number;
}


const PostsCounter = ({count}: PostCounterProps) => {

const label = count > 1 ? "posteos" : "posteo";

  return (
    <div>
        {count} {label}
    </div>
  )
}

export default PostsCounter
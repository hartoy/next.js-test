import Link from 'next/link'
import React from 'react'
import PostsCounter from '../counters/PostsCounter'
import { TrendingHashtag } from '@/types/hash.types'

type MessageHashtagProps = {
  hash: TrendingHashtag
}

const MessageHashtag = ({ hash }: MessageHashtagProps) => {
  return (
    <div>
      <Link href={`/?query=${hash.hash?.replace('#', '') ?? ''}&type=hash`}>
        <h4 className="font-semibold cursor-pointer">{hash.hash}</h4>
      </Link>
      <div className="p-1">
        <PostsCounter count={hash.count} />
      </div>
    </div>
  )
}

export default MessageHashtag

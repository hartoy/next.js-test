import Message from '@/components/messages/Message'
import UsersTabs from '@/components/messages/users/UsersTabs'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import userApi from '@/services/users/users.services'

type UsePageContainerProps = {
  username: string
}

const UsersPageContainerAsync = async ({ username }: UsePageContainerProps) => {
  const userPromise = userApi.getUserData(username)
  const userMessagesPromise = userApi.getUserMessages(username)
  const userMessagesRepliesPromise = userApi.getUserMessagesReplies(username)

  const userFollowersPromise = userApi.getUserFollowers(username)
  const userFollowingPromise = userApi.getUserFollowing(username)

  const [user, userMessages, userMessagesReplies, userFollowers, userFollowing] = await Promise.all([
    userPromise,
    userMessagesPromise,
    userMessagesRepliesPromise,
    userFollowersPromise,
    userFollowingPromise,
  ])

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="flex flex-col mb-8">
        <div className="rounded-full text-center mb-4 block relative w-20 h-20">
          <Image className="rounded-full" src={user.photoUrl} alt="Profile picture" fill priority />
        </div>
        <h2 className="mb-1">{user.name}</h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          @<Link href={`/users/${user.username}`}>{user.username} </Link>
        </div>
        <div className="mb-4">{user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">{user.followersCount}</span> Seguidores
          </div>
          <div>
            <span className="font-semibold">{user.followingCount}</span> Siguiendo
          </div>
        </div>
      </section>
      <UsersTabs
        messages={userMessages.content}
        replies={userMessagesReplies.content}
        followers={userFollowers.content}
        followings={userFollowing.content}
      ></UsersTabs>
    </main>
  )
}

export default UsersPageContainerAsync

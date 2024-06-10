import React from 'react'
import userApi from '@/services/users/users.services'
import UsersPageContainerAsync from '@/components/messages/users/UsersPageContainerAsync'

const UserPage = async ({ params }: { params: { username: string } }) => {
  const userPromise = userApi.getUserData(params.username)
  const userMessagesPromise = userApi.getUserMessages(params.username)
  const userMessagesRepliesPromise = userApi.getUserMessagesReplies(params.username)

  const [user, userMessages, userMessagesReplies] = await Promise.all([
    userPromise,
    userMessagesPromise,
    userMessagesRepliesPromise,
  ])

  return <UsersPageContainerAsync username={params.username} />
}

export default UserPage

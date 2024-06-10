import messageAPI from '@/services/messages/messages.services'
import React from 'react'
import MessagePageContainer from './page.container'
import { headers } from 'next/headers'
import userApi from '@/services/users/users.services'

const MessagePage = async ({ params }: { params: { id: string } }) => {
  const accessToken = headers().get('x-social-acces-token') ?? null
  const currentUser = accessToken ? await userApi.getMeInternal(accessToken) : undefined

  const repliesPagePromise = messageAPI.getMessagesReplies(params.id, 0, 10)
  const MessagesPromise = messageAPI.getMessage(params.id)

  const [repliesPage, message] = await Promise.all([repliesPagePromise, MessagesPromise])

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <MessagePageContainer
        message={message}
        repliesPage={repliesPage}
        parentId={params.id}
        currentUser={currentUser}
      />
    </main>
  )
}

export default MessagePage

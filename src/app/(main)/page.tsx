import messageAPI from '@/services/messages/messages.services'
import React from 'react'
import IndexPageContainer from './page.container'
import { headers } from 'next/headers'
import userApi from '@/services/users/users.services'

const IndexPage = async ({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) => {
  const accessToken = headers().get('x-social-acces-token') ?? null
  const currentUser = accessToken ? await userApi.getMeInternal(accessToken) : undefined

  const messageResponse = searchParams?.query
    ? await messageAPI.getMessagesByHash(searchParams?.query, 0, 10)
    : await messageAPI.getMessagesFeed(0, 10)

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="flex flex-col mb-8">
        <IndexPageContainer
          initialQuery={searchParams?.query}
          messageResponse={messageResponse}
          currentUser={currentUser}
        />
      </section>
    </main>
  )
}

export default IndexPage

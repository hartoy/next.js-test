import Message from '@/components/messages/Message'
import Link from 'next/link'
import React from 'react'

const MessagesPage = () => {

const messages = [
    {
      name: "Han Solo",
      username: "hsolo",
      message: "Tercer mensaje",
      repliesCount: 2
    },
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "primer mensaje",
      repliesCount: 22
    }
  ]



  return (
    <main className='flex flex-col bg-gray-200 p-8'>
      <section className='flex flex-col mb-8'>
        {messages.map ((message,index) =>
         <Message key={`${index}`} message={message}></Message>)
        }
      </section>
    </main>
  )
}

export default MessagesPage
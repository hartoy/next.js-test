import Message from '@/components/messages/Message'
import UsersTabs from '@/components/messages/users/UsersTabs'
import Link from 'next/link'
import React from 'react'



const UserPage = ({params}: {params: {username: string}}) => {

const user ={
  username: params.username,
  name: "Pedro Lopo",
  bio: "La bio de Pedro Lopo",
  followersCount: 15,
  followingCount: 3,
  messages: [
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "segundo mensaje",
      repliesCount: 13
    },
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "primer mensaje",
      repliesCount: 22
    }
  ],
  replies: [
    {
      message: "mi primer mensaje",
      repliesCount:13,
    },
    {
      message: "mi segundo mensaje",
      repliesCount:43,
    }
  ]
}


  return (
    <main className='flex flex-col bg-gray-200 p-8'>
      <section className='flex flex-col mb-8'>
        <div className='rounded-full p-6 bg-gray-300 w-20 text-center mb-4'>
          <span className='font-semibold tex-lg'>LOP</span> 
        </div>
        <h2 className='mb-1'>{user.name}</h2>
        <div className='text-md mb-4 text-gray-600 cursor-pointer'>
          @<Link href={`/users/${user.username}`}>{user.username} </Link>
        </div>
        <div className='mb-4'>
          {user.bio}
        </div>
        <div className='flex justify-between mb-4'>
         <div><span className='font-semibold'>{user.followersCount}</span> Seguidores</div>
         <div><span className='font-semibold'>{user.followingCount}</span> Siguiendo</div>
        </div>
      </section>
      <UsersTabs messages={user.messages} replies ={[]}></UsersTabs>
    </main>
  )
}

export default UserPage
import Message from '@/components/messages/Message'
import UsersTabs from '@/components/messages/users/UsersTabs'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePic from "../../../../../public/anakin.jpg"
import { UserType } from '@/types/user.types'

const getUserData = async (username: string) : Promise <UserType> => {
  const res = await fetch(`http://localhost:3000/api/public/users/${username}`);

  if (!res.ok) {
    throw new Error ("Error al recuperar usuarios")
  }

  return res.json();
}

const UserPage = async ({ params }: { params: { username: string } }) => {

  const user = await getUserData (params.username)
  console.log("user", user)
  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="flex flex-col mb-8">
        <div className="rounded-full text-center mb-4 block relative w-20 h-20">
          <Image
            className='rounded-full'
            src={profilePic} 
            alt="Profile picture"
            fill
            priority
            placeholder="blur"
          />
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
      <UsersTabs messages={[]} replies={[]}></UsersTabs>
    </main>
  )
}

export default UserPage

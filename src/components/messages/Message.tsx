import Link from 'next/link'
import React from 'react'
import { MessageType } from '@/types/message.types'
import Image from 'next/image'

type MessageProps = {
  message: MessageType;
}

const Message = ({message}: MessageProps) => {
  return (
    <div className='flex'>
        <div className='rounded-full p-5 bg-gray-300 w-16 text-center mb-4 h-[65px]'>
          <span className='font-semibold tex-sm'>LOP</span> 
        </div>
        <div className='flex flex-col ml-4 mt-2'>
          <div className='flex'>
            <h3>{message.name}</h3>
            <div className='text-md ml-2 text-gray-600 cursor-pointer'>
           @<Link href={`/users/${message.username}`}>{message.username} </Link>
        </div>
          </div>
          <p>{message.message} </p>
          <div>
            <Image
            className=''
            src="https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg" 
            alt="Profile picture"
            width={300}
            height={300}
          />
          </div>
        </div>
        
        </div>
  )
}

export default Message
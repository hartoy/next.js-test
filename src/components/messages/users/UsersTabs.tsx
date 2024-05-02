"use client"
import React, { useState } from 'react'
import { MessageType } from '@/types/message.types'
import Message from '../Message'

enum TabView {
    MESSAGES, REPLIES
}

type UserTabsProps = {
  messages: MessageType[]
  replies: MessageType[]
}

const UsersTabs = ({ messages, replies }: UserTabsProps) => {

    const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mb-4">
        <div className={`cursor-pointer  ${tab === TabView.MESSAGES ? "border-blue-400 border-b-4" : ""}  `} onClick={() =>setTab(TabView.MESSAGES)}>Mensajes</div>
        <div className={`cursor-pointer ${tab === TabView.REPLIES ? "border-blue-400 border-b-4" : ""}  `} onClick={() =>setTab(TabView.REPLIES)}>Respuestas</div>
      </div>
      <div>
        {tab === TabView.MESSAGES && messages.map((message, index) => (
          <Message key={`${index}`} message={message}></Message>
        ))}
        {tab === TabView.REPLIES && replies.map((message, index) => (
          <Message key={`${index}`} message={message}></Message>
        ))}
      </div>
    </>
  )
}

export default UsersTabs

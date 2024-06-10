'use client'
import { TrendingHashtag } from '@/types/hash.types'
import { TrendingUserType } from '@/types/user.types'
import React, { useEffect, useState } from 'react'
import UserCard, { UserCardLayout } from '../messages/users/UserCard'
import MessageHashtag from '../messages/MessageHashtag'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import UserList from '../messages/users/UserList'
import { PageType } from '@/types/pagination.types'
import MessageHashtagList from '../messages/MessageHashtagList'

enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hashtags: PageType<TrendingHashtag>
  users: PageType<TrendingUserType>
  initialTab?: string
}

const ExploreTabs = ({ hashtags, users, initialTab }: ExploreTabsProps) => {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS)

  useEffect(() => {
    const type = searchParams.get('type')
    setTab(type ? TabView[type as keyof typeof TabView] : tab)
  }, [searchParams, tab])

  return (
    <>
      <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
          <div
            className={`cursor-pointer  ${tab === TabView.HASHTAGS ? 'border-blue-400 border-b-4' : ''}  `}>
            Hashtags
          </div>
        </Link>
        <Link href="/explore?type=USERS">
        <div
          className={`cursor-pointer ${tab === TabView.USERS ? 'border-blue-400 border-b-4' : ''}  `}>
          Usuarios
        </div>
        </Link>
      </div>
      <div>
        {tab === TabView.HASHTAGS && <MessageHashtagList  initialPage={hashtags} />}
        {tab === TabView.USERS && <UserList  initialUsersPage={users}/>}
      </div>
    </>
  )
}

export default ExploreTabs

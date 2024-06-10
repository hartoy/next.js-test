import UsersPageContainerAsync from '@/components/messages/users/UsersPageContainerAsync'
import userApi from '@/services/users/users.services'
import React from 'react'
import { headers } from 'next/headers'

const ProfilePage = async () => {
  const accessToken = headers().get('x-social-acces-token') ?? ''
  const me = await userApi.getMeInternal(accessToken)
  return <UsersPageContainerAsync username={me.username} />
}

export default ProfilePage

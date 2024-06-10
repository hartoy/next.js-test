'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import messageAPI from '@/services/messages/messages.services'
import useMessages from '@/context/message.context'
import { UserType } from '@/types/user.types'
import { useRouter } from 'next/navigation'

type FormData = {
  message: string
}

type MessagePostFormType = {
  parentId?: string
  currentUser?: UserType
}

const MessagePostForm = ({ parentId, currentUser }: MessagePostFormType) => {
  const router = useRouter()
  const { postMessage } = useMessages()
  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>()

  useEffect(() => {
    setFocus('message')
  }, [setFocus])

  const onSubmit = async (data: FormData) => {
    await postMessage(data.message, parentId)

    resetField('message')
    setFocus('message')
  }

  const goToLogin = () => {
    router.push('/login')
    router.refresh()
  }

  if (!currentUser) {
    return (
      <div className="mb-8 mt-4 flex flex-col items-center">
        <h3>Inicia tu sesion para escribir un mensaje</h3>
        <button className="button-primary mt-4 w-fit" onClick={() => goToLogin()} type="submit">
          Iniciar sesion
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-12 mb-4">
      <div className="w-full h-full mt-1 text-center mb-4 block relative col-span-2 flex items-center justify-center">
        <Image src={currentUser.photoUrl} priority className="rounded-full" alt={''} width={50} height={50} />
      </div>
      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={4}
            className="resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200"
            placeholder="Que estas pensando?"
            {...register('message', {
              required: true,
            })}
          />
          <div className="flex justify-end">
            <button className="button-primary uppercase font-semibold w-fit" type="submit">
              Postear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessagePostForm

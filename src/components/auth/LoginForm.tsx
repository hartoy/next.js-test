'use client'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from '../form/SubmitButton'
import InputText from '../form/InputText'
import { AccesDeniedError } from '@/services/common/http.errors'
import { useRouter } from 'next/navigation'
import authAPI from '@/services/auth/auth.api'
import LoginScheme from '@/schemes/login.scheme'

type FormData = {
  username: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const methods = useForm<FormData>({
    resolver: yupResolver(LoginScheme),
  })
  const { handleSubmit } = methods

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      const loginResponse = await authAPI.login(data.username, data.password)
      console.log(JSON.stringify(loginResponse))
      router.push('/')
      router.refresh()
    } catch (e) {
      if (e instanceof AccesDeniedError) {
        setServerError('Tus credenciales son invalidas')
      } else {
        setServerError('Ha ocurrido un error')
      }
    }

    return false
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText label={'Nombre de usuario'} fieldName={'username'} placeholder="Anakin Skywalker" type="text" />
        <InputText label={'Contraseña'} fieldName={'password'} type="password" />
        <SubmitButton label={'Ingresar'} onSubmit={onSubmit} styles="mt-4" />
        {serverError && <div className="mt-4 text-red-600">{serverError}</div>}
      </form>
    </FormProvider>
  )
}

export default LoginForm

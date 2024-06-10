import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

type InputTextProps = {
  label: string
  placeholder?: string
  styles?: string
  fieldName: string
  type: 'text' | 'password'
}

const InputText = ({ type, label, placeholder, styles, fieldName }: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={` flex flex-col ${styles ?? ''}`}>
      <label className="mb-2">{label}</label>
      <input
        {...register(fieldName)}
        className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
        type={type}
        placeholder={placeholder}
      />
      {errors && errors[fieldName] && <div className="text-red-600 mt-2">Este campo es obligatorio</div>}
    </div>
  )
}

export default InputText

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { basicFormSchema, BasicFormValues } from '@/lib/formSchema'

import styles from './Form.module.css'

export default function Form() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [responseError, setResponseError] = useState('')

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<BasicFormValues>({ resolver: zodResolver(basicFormSchema) })

  const onSubmit: SubmitHandler<BasicFormValues> = async (data) => {
    try {
      const res = await axios.post('/api/auth', data)
      if (res.status === 200) {
        window.location.href = '/work/restricted'
      } else if (res.status === 401) {
        setError('root.serverError', {
          type: 'custom',
          message: 'IDかパスワードが異なります',
        })
      }
    } catch (error: any) {
      console.error(error)
      setResponseError(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register('userId')}
        id="userId"
        type="text"
        placeholder="User ID"
        className={styles.input}
        autoComplete="username"
      />
      {errors.userId && (
        <p role="alert" className={styles.alert}>
          {errors.userId.message}
        </p>
      )}
      <input
        {...register('password')}
        id="password"
        type="password"
        placeholder="Password"
        className={styles.input}
        autoComplete="current-password"
      />
      {errors.password && (
        <p role="alert" className={styles.alert}>
          {errors.password.message}
        </p>
      )}

      <input type="submit" className={styles.button} />
      {responseError && (
        <p role="alert" className={styles.alert}>
          {responseError}
        </p>
      )}
    </form>
  )
}

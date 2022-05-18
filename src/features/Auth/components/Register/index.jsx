import { unwrapResult } from '@reduxjs/toolkit'
import { register } from 'features/Auth/userSlice'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useDispatch } from 'react-redux'
import RegisterForm from '../RegisterForm'

function Register(props) {
  const { closeDialog } = props
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async values => {
    try {
      // auto set username = email
      values.username = values.email

      const action = register(values)
      const resultAction = await dispatch(action)
      console.log(resultAction)
      const user = unwrapResult(resultAction)
      console.log('new user', user)

      //close dialog
      if (closeDialog) {
        closeDialog()
      }
      enqueueSnackbar('register succesfully!!!🎆', { variant: 'success' })
    } catch (error) {
      console.log('failed to register:', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit}></RegisterForm>
    </div>
  )
}

export default Register

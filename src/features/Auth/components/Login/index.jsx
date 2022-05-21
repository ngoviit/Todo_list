import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import { login } from 'features/Auth/userSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from '../LoginForm'

function Login(props) {
  const { closeDialog } = props
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async values => {
    try {
      const action = login(values)
      console.log(action)
      const resultAction = await dispatch(action)
      console.log(resultAction)
      unwrapResult(resultAction)

      //close dialog
      if (closeDialog) {
        closeDialog()
      }
    } catch (error) {
      console.log('failed to login:', error)
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
    </div>
  )
}

export default Login

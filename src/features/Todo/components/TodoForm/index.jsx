import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../../components/form-controls/InputField'

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
}

function TodoForm(props) {
  const { onSubmit } = props
  const schema = yup
    .object({
      title: yup
        .string()
        .required('Làm ơn hãy nhập')
        .min(5, 'ngắn quá nhập thêm đi'),
    })
    .required()

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  })
  const handleSubmits = values => {
    if (onSubmit) {
      onSubmit(values)
    }
  }
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmits)}>
        <InputField name="title" label="Todo" form={form}></InputField>
      </form>
    </div>
  )
}

export default TodoForm

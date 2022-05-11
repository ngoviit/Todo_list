import React, { useState } from 'react'
import PropTypes from 'prop-types'

TodoForm.propTypes = {
  onsubmit: PropTypes.func,
}
function TodoForm(props) {
  const { onsubmit } = props
  const [value, setValue] = useState('')
  function handleChangeValue(e) {
    setValue(e.target.value)
  }
  function handleOnsubmit(e) {
    e.preventDefault()
    const newTodo = {
      title: value,
    }
    onsubmit(newTodo)
    setValue('')
  }
  return (
    <form onSubmit={handleOnsubmit}>
      <input type="text" value={value} onChange={handleChangeValue} />
    </form>
  )
}

export default TodoForm

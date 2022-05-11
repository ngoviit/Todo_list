import React from 'react'
import { Outlet } from 'react-router-dom'

function TodoFeature(props) {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default TodoFeature

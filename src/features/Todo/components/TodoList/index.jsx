// rsfp
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './style.scss'
TodoList.propTypes = {
  todoList: PropTypes.array,
}

function TodoList({ todoList, onTodoClick }) {
  const handleTodoclick = (todo, index) => {
    if (!onTodoClick) return
    onTodoClick(todo, index)
  }
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            'todo-item': true,
            completed: todo.status === 'completed',
          })}
          onClick={() => {
            handleTodoclick(todo, index)
          }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default TodoList

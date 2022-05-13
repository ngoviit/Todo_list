import React, { useEffect, useMemo, useState } from 'react'
import TodoList from '../../components/TodoList'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import TodoForm from '../../components/TodoForm'
function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Slepp',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ]

  const location = useLocation()
  const navigate = useNavigate()

  const [todoList, setTodolist] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState(() => {
    //
    const params = queryString.parse(location.search)
    return params.status
  })
  useEffect(() => {
    const param = queryString.parse(location.search)
    setFilterStatus(param.status || 'all')
  }, [location.search])

  const handleTodoClick = (todo, index) => {
    //clone array todoList
    const newTodoList = [...todoList]
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    }
    // update state
    setTodolist(newTodoList)
  }
  const handleShowAllClick = () => {
    // setFilterStatus('all')
    const queryParams = queryString.stringify({ status: 'all' })
    navigate('?' + queryParams)
  }
  const handleShowCompletedClick = () => {
    // setFilterStatus('completed')
    const queryParams = queryString.stringify({ status: 'completed' })
    navigate('?' + queryParams)
  }
  const handleShowNewClick = () => {
    // setFilterStatus('new')
    const queryParams = queryString.stringify({ status: 'new' })
    navigate('?' + queryParams)
  }

  const renderTodoList = useMemo(() => {
    return todoList.filter(
      todo => filterStatus === 'all' || filterStatus === todo.status
    )
  }, [todoList, filterStatus])

  const handleTodoFormSubmit = values => {
    console.log('form submit', values)
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    }
    const newTodoList = [...todoList, newTodo]
    setTodolist(newTodoList)
  }

  return (
    <div>
      <h3>What todo</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <h3>Todo List</h3>
      <TodoList
        todoList={renderTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>
      <div>
        <button onClick={handleShowAllClick}>Showall</button>
        <button onClick={handleShowCompletedClick}>show completed</button>
        <button onClick={handleShowNewClick}>show new</button>
      </div>
    </div>
  )
}

export default ListPage

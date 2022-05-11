import React, { useEffect, useMemo, useState } from 'react'
import TodoList from '../../components/TodoList'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
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
  return (
    <div>
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

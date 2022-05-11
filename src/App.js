import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { Route, Routes, Link, Navigate, Outlet } from 'react-router-dom'
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'

import './App.css'

function App() {
  const todoLists = [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = queryString.stringify(filters)
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
  //       const response = await fetch(requestUrl)
  //       const reponseJson = await response.json()

  //       const { data, pagination } = reponseJson

  //       setPostList(data)
  //       setPagination(pagination)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchPostList()
  // }, [filters])

  function handlePageChange(newPage) {
    console.log(newPage)
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  const [todoList, setTodoList] = useState(todoLists)
  // function handleClick(todo) {
  //   const newTodoList = [...todoList]
  //   const index = newTodoList.findIndex(x => x.id === todo.id)
  //   newTodoList.splice(index, 1)
  //   setTodoList(newTodoList)
  // }

  // function handelTodoFormSubmit(newTodo) {
  //   console.log(newTodo)
  //   const newTodoInList = {
  //     id: todoList.length + 1,
  //     ...newTodo,
  //   }
  //   const newTodoList = [...todoList]
  //   newTodoList.push(newTodoInList)
  //   setTodoList(newTodoList)
  // }

  // function handleFiltersChange(newFilters) {
  //   console.log(newFilters)
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   })
  // }

  // const [showClock, setShowClock] = useState(true)

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>

      <Outlet></Outlet>

      {/* <TodoForm onsubmit={handelTodoFormSubmit}></TodoForm> */}
      {/* <TodoList todos={todoList} onTodoClick={handleClick}></TodoList> */}
      {/* <PostFilteForm onSubmit={handleFiltersChange}></PostFilteForm>
      <PostList posts={postList}></PostList>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      ></Pagination> */}
      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button> */}
      {/* <MagicBox></MagicBox> */}
      {/* <Route path="/todos" component={TodoFeature} /> */}
    </div>
  )
}

export default App

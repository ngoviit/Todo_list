import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'
import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'
import DetailPage from './features/Todo/pages/DetailPage'
import ListPage from './features/Todo/pages/ListPage'
import Option from './features/Todo/pages/Option'
import './index.css'
import reportWebVitals from './reportWebVitals'
import CounterFeatured from './features/Counter'
import Header from 'components/Header'
import { SnackbarProvider } from 'notistack'
import ProductFeatured from 'features/Product'
import ListPageProduct from 'features/Product/pages/ListPage'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="albums" element={<AlbumFeature />} />
              <Route path="counter" element={<CounterFeatured />} />
              <Route path="todos" element={<TodoFeature />}>
                <Route index element={<Option />} />

                <Route path="detail" element={<DetailPage />} />
                <Route path="list" element={<ListPage />} />
              </Route>
              <Route path="product" element={<ProductFeatured />}>
                <Route index element={<ListPageProduct />} />
              </Route>
              <Route path="home" element={<Navigate replace to="/" />} />
            </Route>
            <Route path="contact" element={<h1>XIn chào</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

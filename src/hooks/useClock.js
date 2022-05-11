import { useState, useEffect } from 'react'

function convertTimetoString() {
  const date = new Date()
  const seconds = `0${date.getSeconds()}`.slice(-2)
  const minute = `0${date.getMinutes()}`.slice(-2)
  const hours = `0${date.getHours()}`.slice(-2)
  return `${hours}:${minute}:${seconds}`
}

function useClock() {
  // hàm useEffect sẽ được gọi sau khi render lần đầu, sử dụng để xử lý trường hợp khi unmout component
  const [stringTime, setStringTime] = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const newStringTime = convertTimetoString(now)
      setStringTime(newStringTime)
    }, 1000)
    return () => clearInterval(interval)
  })
  return { stringTime }
}

export default useClock

// Logic
// mỗi 1 seconds gọi lại setState để render ra dữ liệu mới -> sử dụng Date() constructor để lấy ra ngày giờ realtime

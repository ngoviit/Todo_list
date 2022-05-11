import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

Counter.propTypes = {}

function Counter(props) {
  const [count, setCount] = useState(0)
  const prevNumber = useRef(count)

  // useRef sử dụng để lưu giá trị mà qua mỗi lần reder lại component thì giá trị k thay đổi
  useEffect(() => {
    prevNumber.current = count
  }, [count])

  function handleIncrease() {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Previous:{prevNumber.current}</h2>
      <h2>Current:{count}</h2>
      <div>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </div>
  )
}

export default Counter

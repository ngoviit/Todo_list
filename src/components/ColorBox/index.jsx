import React, { useState } from 'react'
import './style.scss'

const getRandomColor = function () {
  const COLOR_LIST = ['red', 'green', 'blue', 'yellow']
  const randomIndex = Math.trunc(Math.random() * 4)
  return COLOR_LIST[randomIndex]
}
function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink'
    return initColor
  })
  const handleBoxClick = function (params) {
    const newColor = getRandomColor()
    setColor(newColor)
    localStorage.setItem('box_color', newColor)
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  )
}

export default ColorBox

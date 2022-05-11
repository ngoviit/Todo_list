import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useClock from '../../hooks/useClock'

Clock.propTypes = {}

function Clock() {
  const { stringTime } = useClock()
  return <p style={{ fontSize: '40px ' }}>{stringTime}</p>
}

export default Clock

// Logic
// mỗi 1 seconds gọi lại setState để render ra dữ liệu mới -> sử dụng Date() constructor để lấy ra ngày giờ realtime

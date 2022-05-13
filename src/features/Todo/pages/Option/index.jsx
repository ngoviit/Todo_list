import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Option.propTypes = {}

function Option(props) {
  return (
    <div>
      <Link to="list">Lists</Link>
      <Link to="detail">Details</Link>
    </div>
  )
}

export default Option

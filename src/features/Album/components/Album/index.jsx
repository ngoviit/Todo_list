import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
Album.propTypes = {}

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnaiUrl} alt="no img" />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  )
}

export default Album

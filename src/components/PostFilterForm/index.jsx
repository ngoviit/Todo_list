import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

PostFilteForm.propTypes = {
  onSubmit: PropTypes.func,
}
PostFilteForm.defaultProps = {
  onSubmit: null,
}
function PostFilteForm(props) {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  const handleSearchTermChange = function (e) {
    setSearchTerm(e.target.value)
    if (!onSubmit) return

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: e.target.value,
      }
      onSubmit(formValue)
    }, 300)
  }

  return (
    <form action="">
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  )
}

export default PostFilteForm

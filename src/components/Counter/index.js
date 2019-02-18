// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import
import './Counter.scss'

// Code
const Counter = ({ count }) => {
  let message

  switch (count) {
    case 0:
      message = 'Aucune tâche'
      break

    case 1:
      message = 'Une tâche en cours'
      break

    default:
      message = `${count} tâches en cours`
      break
  }

  return (
    <div id="todo-counter">
      {message}
    </div>
  )
}

Counter.protoTypes = {
  count: PropTypes.number.isRequired,
}

// Export
export default Counter

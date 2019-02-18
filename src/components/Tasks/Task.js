// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import

// Code
const Task = ({ done, label }) => (
  <li className={done ? 'task task--done' : 'task'}>
    <input
      type="checkbox"
      checked={done}
    />
    <span className="task-label">
      {label}
    </span>
  </li>
)

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
}

// Export
export default Task

// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Local Import

// Code
const Task = ({ done, label }) => (
  <li className={classNames(
    'task',
    { 'task--done': done },
  )}
  >
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

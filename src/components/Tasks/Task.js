// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Local Import

// Code
const Task = ({
  id,
  done,
  label,
  fav,
  onTaskCheck,
  onTaskFav,
  onTaskDelete,
}) => (
  <li className={classNames(
    'task',
    { 'task--done': done },
    { 'task--fav': fav },
  )}
  >
    <input
      type="checkbox"
      checked={done}
      onChange={onTaskCheck(id)}
    />
    <span className="task-label">
      {label}
    </span>
    <i
      className="fas fa-star fav"
      onClick={onTaskFav(id)}
    />
    <i
      className="fas fa-trash-alt delete"
      onClick={onTaskDelete(id)}
    />

  </li>
)

Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onTaskCheck: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
}

// Export
export default Task

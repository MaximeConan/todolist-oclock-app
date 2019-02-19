// NPM Import
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FaTrash, FaStar, FaRegStar } from 'react-icons/fa'

// Local Import

// Code
const Task = ({
  id,
  done,
  fav,
  label,
  onTaskCheck,
  onTaskRemove,
  onTaskFav,
}) => {
  // On change l'icône selon si la tâche est fav ou non
  const Favorite = fav ? FaStar : FaRegStar

  return (
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
      <Favorite
        className="task-fav"
        onClick={onTaskFav(id)}
      />
      <FaTrash
        className="task-trash"
        onClick={onTaskRemove(id)}
      />
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onTaskCheck: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired,
}

// Export
export default Task

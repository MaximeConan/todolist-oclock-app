// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import
import './Tasks.scss'
import Task from 'src/components/Tasks/Task'


// Code
const Tasks = ({ list, onTaskCheck, onTaskFav }) => (
  <ul id="todo-list">
    {list.map(task => (
      <Task
        key={task.id}
        onTaskCheck={onTaskCheck}
        onTaskFav={onTaskFav}
        {...task}
      />
    ))}
  </ul>
)

Tasks.propTypes = {
  onTaskCheck: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}

// Export
export default Tasks

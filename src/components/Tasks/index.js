// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import
import './Tasks.scss'
import Task from 'src/components/Tasks/Task'


// Code
const Tasks = ({
  list,
  actions,
}) => (
  <ul id="todo-list">
    {list.map(task => (
      <Task
        key={task.id}
        {...actions}
        {...task}
      />
    ))}
  </ul>
)

Tasks.propTypes = {
  actions: PropTypes.objectOf(
    PropTypes.func.isRequired,
  ).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

// Export
export default Tasks

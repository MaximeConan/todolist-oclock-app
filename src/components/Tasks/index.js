// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import
import './Tasks.scss'
import Task from 'src/components/Tasks/Task'


// Code
const Tasks = ({ list }) => (
  <ul id="todo-list">
    {list.map(task => (
      <Task
        key={task.id}
        {...task}
      />
    ))}
  </ul>
)

Tasks.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}

// Export
export default Tasks

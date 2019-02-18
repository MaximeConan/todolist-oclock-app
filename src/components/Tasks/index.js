// NPM Import
import React from 'react'

// Local Import
import './Tasks.scss'
import Task from 'src/components/Tasks/Task'


// Code
const Tasks = () => (
  <ul id="todo-list">
    <Task
      label="Coder une todolist"
      done={false}
    />
    <Task
      label="Faire les courses"
      done
    />
    <Task
      label="Allez à la salle"
      done={false}
    />
  </ul>
)

// Export
export default Tasks

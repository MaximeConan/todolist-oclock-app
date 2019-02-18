// NPM Import
import React from 'react'

// Local Import
import './Form.scss'

// Code
const Form = () => (
  <form id="todo-form">
    <input
      type="text"
      id="toto-input"
      placeholder="Ajouter une tâche"
      autoComplete="off"
    />
  </form>
)

// Export
export default Form

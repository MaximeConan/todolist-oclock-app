// NPM Import
import React from 'react'
import PropTypes from 'prop-types'

// Local Import
import './Form.scss'

// Code
class Form extends React.Component {
  handleSubmit = (event) => {
    const { onAddTask } = this.props
    event.preventDefault()
    // J'intercèpte ma fonction de App à la soumission du form
    onAddTask()
  }

  render() {
    return (
      <form
        id="todo-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          id="toto-input"
          placeholder="Ajouter une tâche"
          autoComplete="off"
        />
      </form>
    )
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}

// Export
export default Form

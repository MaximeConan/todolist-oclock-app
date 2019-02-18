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

  handleChange = (event) => {
    const { value } = event.target
    const { onChangeInput } = this.props
    onChangeInput(value)
  }

  render() {
    const { inputValue } = this.props

    return (
      <form
        id="todo-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          autoComplete="off"
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}

// Export
export default Form

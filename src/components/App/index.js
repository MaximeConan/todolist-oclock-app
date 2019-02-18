// NPM Import
import React from 'react'

// Local Import
import './App.scss'

import Form from 'src/components/Form'
import Counter from 'src/components/Counter'
import Tasks from 'src/components/Tasks'

import taskList from 'src/datas/tasks'

// Code
class App extends React.Component {
  // Définition du state
  state = {
    tasks: taskList,
    input: '',
  }

  addTask = () => {
    // Préparer la nouvelle liste : ancienne liste + nouvelle tâche grâce à concat()
    const { tasks, input } = this.state

    // Récupérer l'input value depuis l'input présent dans notre state
    const inputValue = input

    // Préparer la nouvelle tâche
    const lastId = Math.max(...tasks.map(task => task.id)) + 1

    const newTask = {
      id: lastId,
      label: inputValue,
      done: false,
    }

    // On créé un nouveau tableau avec l'ancienne liste et le nouvelle élément
    const newTasks = [...tasks, newTask]

    // Modification du state
    this.setState({
      tasks: newTasks,
      input: '',
    })
  }

  changeInput = (inputValue) => {
    // Changer le state via setState
    this.setState({
      input: inputValue,
    })
  }

  render() {
    // Récup des tâches dans le state
    const { tasks, input } = this.state

    // Récup du nombre de tâches en cours
    const count = tasks.filter(task => !task.done).length

    return (
      <div id="app">
        <Form
          inputValue={input}
          onAddTask={this.addTask}
          onChangeInput={this.changeInput}
        />
        <Counter count={count} />
        <Tasks list={tasks} />
      </div>
    )
  }
}

// Export
export default App

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
  }

  addTask = () => {
    // Récupérer l'input value
    const input = document.getElementById('todo-input')
    const inputValue = input.value

    // Préparer la nouvelle tâche
    const lastId = Math.max(...taskList.map(task => task.id)) + 1

    const newTask = {
      id: lastId,
      label: inputValue,
      done: false,
    }
    // Préparer la nouvelle liste : ancienne liste + nouvelle tâche grâce à concat()
    const { tasks } = this.state

    // On créé un nouveau tableau avec l'ancienne liste et le nouvelle élément
    const newTasks = [...tasks, newTask]

    // Modification du state
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    // Récup des tâches dans le state
    const { tasks } = this.state

    // Récup du nombre de tâches en cours
    const count = tasks.filter(task => !task.done).length

    return (
      <div id="app">
        <Form onAddTask={this.addTask} />
        <Counter count={count} />
        <Tasks list={tasks} />
      </div>
    )
  }
}

// Export
export default App

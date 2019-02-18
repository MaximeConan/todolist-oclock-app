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

  render() {
    // Récup des tâches dans le state
    const { tasks } = this.state

    // Récup du nombre de tâches en cours
    const count = tasks.filter(task => !task.done).length

    return (
      <div id="app">
        <Form />
        <Counter count={count} />
        <Tasks list={tasks} />
      </div>
    )
  }
}

// Export
export default App

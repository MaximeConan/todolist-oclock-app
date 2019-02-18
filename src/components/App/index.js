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
      fav: false,
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

  checkTask = id => () => {
    // Recup des taches
    const { tasks } = this.state
    // Nouvelle liste de tâches grace à map (nouveau tableau)
    const newTasks = tasks.map((task) => {
      // Si l'id transmise est identique à la tache à modifier
      if (id === task.id) {
        // On créer un nouvel objet (attention à la modif du state)
        return {
          // Je recup tout le contenu de la tâche
          ...task,
          // Je change juste la clé done vers l'inverse
          done: !task.done,
        }
      }
      // Si l'id ne correspond pas, pas besoin de faire de copie (pas de modif)
      return task
    })


    this.setState({
      tasks: newTasks,
    })
  }

  favTask = id => () => {
    // Recup des taches
    const { tasks } = this.state
    // Nouvelle liste de tâches grace à map (nouveau tableau)
    const newTasks = tasks.map((task) => {
      // Si l'id transmise est identique à la tache à modifier
      if (id === task.id) {
        // On créer un nouvel objet (attention à la modif du state)
        return {
          // Je recup tout le contenu de la tâche
          ...task,
          // Je change juste la clé done vers l'inverse
          fav: !task.fav,
        }
      }
      // Si l'id ne correspond pas, pas besoin de faire de copie (pas de modif)
      return task
    })


    this.setState({
      tasks: newTasks,
    })
  }

  deleteTask = id => () => {
    // Recup des taches
    const { tasks } = this.state
    // Nouvelle liste de tâches grace à map (nouveau tableau)
    const newTasks = tasks.filter((task) => {
      // Si l'id transmise est identique à la tache à modifier
      if (id !== task.id) {
        // On créer un nouvel objet (attention à la modif du state)
        return tasks
      }
      // Si l'id ne correspond pas, pas besoin de faire de copie (pas de modif)
    })


    this.setState({
      tasks: newTasks,
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
        <Tasks
          list={tasks}
          onTaskCheck={this.checkTask}
          onTaskFav={this.favTask}
          onTaskDelete={this.deleteTask}
        />
      </div>
    )
  }
}

// Export
export default App

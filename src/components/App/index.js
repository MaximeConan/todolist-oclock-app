// NPM Import
import React from 'react'

// Local Import
import './App.scss'

import Form from 'src/components/Form'
import Counter from 'src/components/Counter'
import Tasks from 'src/components/Tasks'

import taskList from 'src/datas/tasks'

// Code
const App = () => (
  <div id="app">
    <Form />
    <Counter count={3} />
    <Tasks list={taskList} />
  </div>
)

// Export
export default App

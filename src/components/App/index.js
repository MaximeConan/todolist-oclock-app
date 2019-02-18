// NPM Import
import React from 'react'

// Local Import
import './App.scss'
import Form from 'src/components/Form'
import Counter from 'src/components/Counter'
import Tasks from 'src/components/Tasks'

// Code
const App = () => (
  <div id="app">
    <Form />
    <Counter count={3} />
    <Tasks />
  </div>
)

// Export
export default App

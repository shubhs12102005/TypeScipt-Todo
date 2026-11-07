import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import AllTodos from './components/AllTodos'

function App() {

  const todos = [ { id: "1", text: "Shubham"} ]

  return (
    <main className="flex flex-col items-center mt-4 min-h-screen gap-4">
      <AddToDo />
      <AllTodos todos={todos} />
    </main>
  )
}

export default App

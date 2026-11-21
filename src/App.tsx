import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import AllTodos from './components/AllTodos'

function App() {

  const [todos, setTodos] = useState<{id: string, text: string}[]>([])

  const addTodo = (text: string) => {
    const id = Math.random().toString();
    setTodos([ ...todos, { id, text }]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="flex flex-col items-center mt-4 min-h-screen gap-4">
      <AddToDo addTodo={addTodo} />
      <AllTodos todos={todos} deleteTodo={deleteTodo} />
    </main>
  )
}

export default App

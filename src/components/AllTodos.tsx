import React from 'react'

type Props = {
    todos: { id: string, text: string}[];
}

const AllTodos = (props: Props) => {
  return (
    <div>
        {
            props.todos.map((todo) => (
                <div key={todo.id} className="border-2 bg-black text-white border-gray-600 py-2 px-4 rounded-md outline-none mr-2 my-2">
                    {todo.text}
                </div>
            ))
        }
    </div>
  )
}

export default AllTodos
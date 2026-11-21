import React from 'react'
import { MdDelete } from "react-icons/md";

type Props = {
    todos: { id: string, text: string }[];
    deleteTodo: (id: string) => void;
}

const AllTodos = (props: Props) => {
    return (
        <div>
            {
                props.todos.map((todo) => (
                    <div key={todo.id} className="border-2 bg-gray-800 text-white border-gray-600 py-0.5 px-6 rounded-md outline-none mr-2 my-2 flex flex-row">
                        <h3 className=''>{todo.text}</h3>

                        <div
                            className='mt-1 ml-4 cursor-pointer'
                            onClick={() => { props.deleteTodo(todo.id) }}
                        >
                            <MdDelete size={20} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AllTodos
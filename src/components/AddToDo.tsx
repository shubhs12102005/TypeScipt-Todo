import React, { useState } from 'react'

type Props = {
    addTodo: (text: string) => void;
}

const AddToDo = (props: Props) => {

   const [task, setTask] = useState<string>("");

    return (
        <div className="">
            <input
                className="border-2 border-gray-600 py-2 px-4 rounded-md outline-none mr-2"
                type="text"
                placeholder='Add tasks ...' 
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />

            <button
                className="border-2 border-gray-900 bg-orange-500 outline-none py-1 px-5 rounded-md"
                onClick={() => props.addTodo(task)}
            >
                Add
            </button>
        </div>
    )
}

export default AddToDo
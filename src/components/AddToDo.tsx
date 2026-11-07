import React from 'react'


const AddToDo = () => {
    return (
        <div className="">
            <input
                className="border-2 border-gray-600 py-2 px-4 rounded-md outline-none mr-2"
                type="text"
                placeholder='Add tasks ...' />

            <button className="border-2 border-gray-900 bg-orange-500 outline-none py-1 px-5 rounded-md">Add</button>
        </div>
    )
}

export default AddToDo
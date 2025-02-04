'use client'
import { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState<string[]>(["front-end", "backend"]);
    const [task, setTask] = useState<string>("");

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    return (
        <div className="">
            <div className="w-[500px] mx-auto p-4 text-center">
                <h2 className="py-10 font-medium text-2xl m-2">To-Do App</h2>
                <div className="items-center w-30">
                    <div className="flex gap-3 pb-4">
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Add a new task"
                            className="border text-sm rounded-lg focus:ring-blue focus:border-blue block w-full px-4 py-2"
                        />
                        <button className='bg-white border  focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5   content-center bg-orange flex items-center' onClick={addTask}>Add</button>
                    </div>

                    <ul>
                        {tasks.map((value, index) => (
                            <li className="flex justify-between w-full p-4" key={index}>
                                <div className=" flex items-center">
                                    {value}
                                </div>
                                <button className=' bg-white border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 content-center bg-orange' onClick={() => removeTask(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div >
        </div >
    )
}

export default TodoApp;
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
            <div className="text-center container mx-auto bg-rose-50 h-screen border-spacing-1">
                <h2 className="py-10 font-medium text-2xl m-2">To-Do App</h2>
                <div className="pb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task"
                        className="bg-gray-50 border border-gray-300"
                    />
                    <button className='ml-20 border border-gray-300' onClick={addTask}>Add</button>
                </div>

                <ul>
                    {tasks.map((value, index) => (
                        <li className="pb-3" key={index}>
                            {value}
                            <button className='pl-20' onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div >
        </div >
    )
}

export default TodoApp;
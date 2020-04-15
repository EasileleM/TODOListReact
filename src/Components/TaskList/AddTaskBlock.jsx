import React, {useState} from "react";

export function AddTaskBlock({addTask}) {
    const [name, setName] = useState('');

    return <div className="taskList__addTaskBlock">
        <input
            type="text"
            className="taskList__addTaskNameInput"
            onChange={(e) => setName(e.target.value)}
        />
        <button
            className="taskList__addTaskButton"
            onClick={() => addTask({name})}
        >
            Add
        </button>
    </div>;
}
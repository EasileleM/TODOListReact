import React, {useState} from "react";

export function Task({ task, remove, toggleCompleteState }) {
    return <div className={`taskList__task ${task.isCompleted ? 'taskList__task_isCompleted' : ''}`}>
        <p className="taskList__taskName">{task.name}</p>
        <button
            className="taskList__taskButton taskList__taskButton_complete"
            onClick={() => toggleCompleteState()}
        >
            {task.isCompleted ? <>&#x021BA;</> : <>&#x2713;</>}
        </button>
        <button
            className="taskList__taskButton taskList__taskButton_remove"
            onClick={() => remove(task)}
        >
            &#10006;
        </button>
    </div>
}
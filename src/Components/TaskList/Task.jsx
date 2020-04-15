import React from "react";

export function Task({ task, name, isCompleted, remove, toggleCompleteState }) {
    return <div className={`taskList__task ${isCompleted ? 'taskList__task_isCompleted' : ''}`}>
        <p className="taskList__taskName">{name}</p>
        <button
            className="taskList__taskButton taskList__taskButton_complete"
            onClick={() => toggleCompleteState()}
        >
            {isCompleted ? <>&#x021BA;</> : <>&#x2713;</>}
        </button>
        <button
            className="taskList__taskButton taskList__taskButton_remove"
            onClick={() => remove(task)}
        >
            &#10006;
        </button>
    </div>
}
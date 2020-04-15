import React from "react";

export function Task({ task, remove }) {
    return <div className="tasklist__task">
        <p className="tasklist__taskName">{task.name}</p>
        <p className="tasklist__taskDescription">{task.description}</p>
        <button
            className="tasklist__taskRemoveButton"
            onClick={() => remove(task)}>
            &#10006;
        </button>
    </div>
}
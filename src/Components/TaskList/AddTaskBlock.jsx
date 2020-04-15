import React from "react";

export function AddTaskBlock({addTask}) {
    return <div className="taskList__addTaskBlock">
        <button onClick={() => addTask({name: Math.random(), description: Math.random()})}>add</button>
    </div>;
}
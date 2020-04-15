import React from "react";

import './TaskList.scss';

export function TaskInfo({ tasks }) {

    return <div className="taskList__taskInfo">
        <p className="taskList__taskInfoCounter taskList__taskInfoCounter_allTasks">
            Task amount: { tasks.length }
        </p>

        <p className="taskList__taskInfoCounter taskList__taskInfoCounter_completedTasks">
            Completed tasks: { tasks.reduce((completedTasksAmount, task) => {
                return completedTasksAmount + (task.isCompleted ? 1 : 0);
            }, 0)}
        </p>
    </div>;
}
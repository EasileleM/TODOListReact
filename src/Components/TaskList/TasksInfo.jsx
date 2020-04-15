import React from "react";

import './TaskList.scss';

export function TaskInfo({ taskAmount, completedCounter }) {
    return <div className="taskList__taskInfo">
        <p className="taskList__taskInfoCounter taskList__taskInfoCounter_allTasks">
            Task amount: { taskAmount }
        </p>

        <p className="taskList__taskInfoCounter taskList__taskInfoCounter_completedTasks">
            Completed tasks: {completedCounter}
        </p>
    </div>;
}
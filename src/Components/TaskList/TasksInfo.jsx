import React from "react";

export function TaskInfo({ tasks }) {

    return <div className="taskInfo">
        <p className="taskInfo__counter taskInfo__counter_allTasks">
            { tasks.length }
        </p>

        <p className="taskInfo__counter taskInfo__counter_completedTasks">
            { tasks.reduce((completedTasksAmount, task) => {
                return completedTasksAmount + (task.isCompleted ? 1 : 0);
            }, 0)}
        </p>
    </div>;
}
import React, { useState } from "react";
import { TaskInfo } from "./TasksInfo";
import { AddTaskBlock } from "./AddTaskBlock";
import { Task } from "./Task";

import './TaskList.scss';

export function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [completedCounter, setCompletedCounter] = useState(0);

    function removeTask(task) {
        const newTasks = tasks.slice();
        newTasks.splice(tasks.findIndex((item) => item === task), 1);
        if (task.isCompleted) {
            setCompletedCounter(completedCounter - 1);
        }
        setTasks(newTasks);
    }

    function addTask(task) {
        const newTasks = tasks.slice();
        if (!task.name || newTasks.find((item) => item.name === task.name)) {
            return false;
        }
        newTasks.push(task);
        setTasks(newTasks);
    }

    function toggleCompleteTaskState(task) {
        setCompletedCounter(completedCounter + (task.isCompleted ? -1 : 1));
        task.isCompleted = !task.isCompleted;
    }

    return <div className="taskList">
            <TaskInfo taskAmount={tasks.length} completedCounter={completedCounter}/>
            <AddTaskBlock addTask={addTask}/>
            {tasks.map((task) => {
                return <Task
                    remove={() => removeTask(task)}
                    key={task.name}
                    name={task.name}
                    isCompleted={task.isCompleted}
                    toggleCompleteState={() => toggleCompleteTaskState(task)}
                />;
            })}
        </div>;
}
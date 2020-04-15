import React, { useState } from "react";
import { TaskInfo } from "./TasksInfo";
import { AddTaskBlock } from "./AddTaskBlock";
import { Task } from "./Task";

export function TaskList() {
    const [tasks, setTasks] = useState([]);

    function removeTask(task) {
        const newTasks = tasks.slice();
        newTasks.splice(tasks.findIndex((item) => item === task));
        setTasks(newTasks);
    }

    function addTask(task) {
        const newTasks = tasks.slice();
        if (newTasks.find((item) => item === task)) {
            return false;
        }
        newTasks.push(task);
        setTasks(newTasks);
    }

    return <div className="taskList">
            <TaskInfo tasks={tasks}/>
            <AddTaskBlock addTask={addTask}/>
            {tasks.map((task) => {
                return <Task
                    remove={() => removeTask(task)}
                    key={task.name}
                    task={task}
                />;
            })}
        </div>;
}
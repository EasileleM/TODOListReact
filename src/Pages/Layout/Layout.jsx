import React from "react";
import { TaskList } from "../../Components/TaskList/TaskList";

import './Layout.scss';

export function Layout() {
    return <div className="layout">
        <TaskList />
    </div>
}
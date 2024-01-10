import React from 'react';
import todolistStyle from './todolist.module.css'

export const ToDoList = () => {
    return (
        <div className={todolistStyle.toDo}>
            <div className={todolistStyle.toDoTitle}>
                <h4>Title todolist</h4>
                <button>X</button>
            </div>
            <div className={todolistStyle.toDoInput}>
                <input/>
                <button>+</button>
            </div>
            <div className={todolistStyle.list}>
                <ul>
                    <li>
                        <input type="checkbox"/>
                        <span>task 1</span>
                        <button>X</button>
                    </li>
                    <li>
                        <input type="checkbox"/>
                        <span>task 1</span>
                        <button>X</button>
                    </li>
                </ul>
            </div>
            <div className={todolistStyle.buttons}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
import React from 'react';
import todolistStyle from './todolist.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {TaskType} from "./AppRoot";


type ToDoListType = {
    todolistId: string
    tasks: TaskType[]
    title: string
    addTask: (todolistId: string, taskTitle: string) => void
    removeTodolist: (todolistId: string) => void
}


export const ToDoList = (props: ToDoListType) => {

    const addTask = (taskTitle: string) => {
        props.addTask(props.todolistId, taskTitle)
    }
    const removeToDoListHandler = () => {
        props.removeTodolist(props.todolistId)
        console.log('hello')
    }

    //for filters
    let tasksForToDoList = props.tasks


    return (
        <div className={todolistStyle.toDo}>
            <div className={todolistStyle.toDoTitle}>
                <h4>{props.title}</h4>
                <button onClick={removeToDoListHandler}>X</button>
            </div>
            <div className={todolistStyle.toDoInput}>
                <AddItemForm callback={addTask}/>
            </div>
            <div className={todolistStyle.list}>

                {
                    tasksForToDoList && tasksForToDoList.map(task =>

                        <div key={task.id}>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <button>X</button>
                                </li>
                            </ul>


                        </div>
                    )
                }
            </div>
            <div className={todolistStyle.buttons}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
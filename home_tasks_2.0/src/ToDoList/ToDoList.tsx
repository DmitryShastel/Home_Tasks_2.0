import React from 'react';
import todolistStyle from './todolist.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {TaskType} from "./AppRoot";
import {SuperCheckBox} from "./components/SuperCheckBox";
import {EditableSpan} from "./components/EditableSpan";


type ToDoListType = {
    todolistId: string
    tasks: TaskType[]
    ToDoListTitle: string
    addTask: (todolistId: string, taskTitle: string) => void
    removeTodolist: (todolistId: string) => void
    removeTask: (todolistId: string, taskId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeToDoListTitle: (todolistId: string, titleTodolist: string) => void
}


export const ToDoList = (props: ToDoListType) => {

    const addTask = (taskTitle: string) => {
        props.addTask(props.todolistId, taskTitle)
    }
    const removeToDoList = () => {
        props.removeTodolist(props.todolistId)
    }
    const removeTask = (taskId: string) => {
        props.removeTask(props.todolistId, taskId)
    }
    const onChangeToDoListTitle = (newTitle: string) => {
        props.changeToDoListTitle(props.todolistId, newTitle)
    }


    //for filters
    let tasksForToDoList = props.tasks

    return (
        <div className={todolistStyle.toDo}>
            <div className={todolistStyle.toDoTitle}>
                <EditableSpan title={props.ToDoListTitle} callback={onChangeToDoListTitle}/>
                <button onClick={removeToDoList}>X</button>
            </div>
            <div className={todolistStyle.toDoInput}>
                <AddItemForm callback={addTask}/>
            </div>
            <div className={todolistStyle.list}>

                {
                    tasksForToDoList && tasksForToDoList.map((task) => {


                        const changeTaskStatus = (checked: boolean) => {
                            props.changeTaskStatus(props.todolistId, task.id, checked)
                        }

                        return (
                            <div key={task.id}>
                                <ul>
                                    <li>
                                        <SuperCheckBox isDone={task.isDone} callback={changeTaskStatus}/>
                                        {/*<input type="checkbox" checked={task.isDone}/>*/}
                                        <span>{task.title}</span>
                                        <button onClick={() => removeTask(task.id)}>X</button>
                                    </li>
                                </ul>


                            </div>
                        )
                    })
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
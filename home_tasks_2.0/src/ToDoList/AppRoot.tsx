import React from 'react';
import appRootStyle from './appRoot.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {addToDoListAC, changeToDoListTitleAC, removeToDoListAC} from "./store/todolist-reducer";
import {AppRootStateType} from "./store/storeToDoList";
import {ToDoList} from "./ToDoList";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/task-reducer";


export type FilterType = 'all' | 'active' | 'completed'

export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksType = {
    [key: string]: TaskType[]
}


export const AppRoot = () => {

    const dispatch = useDispatch()
    const todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks)

//todolistFuns
    const addTodolist = (titleTodolist: string) => {
        dispatch(addToDoListAC(titleTodolist))
    }
    const removeTodolist = (todolistId: string) => {
        dispatch(removeToDoListAC(todolistId))
    }
    const changeToDoListTitle = (todolistId: string, titleTodolist: string) => {
        dispatch(changeToDoListTitleAC(todolistId, titleTodolist))
    }


//taskFuns
    const addTask = (todolistId: string, taskTitle: string) => {
        dispatch(addTaskAC(todolistId, taskTitle))
    }
    const removeTask = (todolistId: string, taskId: string) => {
        dispatch(removeTaskAC(todolistId, taskId))
    }
    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(todolistId, taskId, isDone))
    }
    const changeTaskTitle = (todolistId: string, taskId: string, taskTitle: string) => {
        dispatch(changeTaskTitleAC(todolistId, taskId, taskTitle))
    }


    return (
        <div className={appRootStyle.appContainer}>
            <AddItemForm callback={addTodolist}/>
            <div>
                {
                    todolists.map((todolist) => {

                        let taskForToDoList = tasks[todolist.id]
                        return (
                            <ToDoList
                                key={todolist.id}
                                todolistId={todolist.id}
                                ToDoListTitle={todolist.title}
                                tasks={taskForToDoList}
                                addTask={addTask}
                                removeTodolist={removeTodolist}
                                removeTask={removeTask}
                                changeTaskStatus={changeTaskStatus}
                                changeToDoListTitle={changeToDoListTitle}
                                changeTaskTitle={changeTaskTitle}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};
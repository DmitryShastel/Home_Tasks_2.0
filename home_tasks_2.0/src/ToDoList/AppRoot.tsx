import React from 'react';
import appRootStyle from './appRoot.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {addToDoListAC} from "./store/todolist-reducer";
import {AppRootStateType} from "./store/storeToDoList";
import {ToDoList} from "./ToDoList";
import {debug} from "util";
import {addTaskAC} from "./store/task-reducer";


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


    const addTodolist = (titleTodolist: string) => {
        dispatch(addToDoListAC(titleTodolist))
    }

    const addTask = (todolistId: string, taskTitle: string) => {
        dispatch(addTaskAC(todolistId, taskTitle))
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
                                todolistId={todolist.id}
                                title={todolist.title}
                                tasks={taskForToDoList}
                                addTask={addTask}
                            />
                        )
                    })
                }
            </div>


        </div>
    );
};
import React, {useCallback} from 'react';
import appRootStyle from './appRoot.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {addToDoListAC, changeToDoListFilterAC, changeToDoListTitleAC, removeToDoListAC} from "./store/todolist-reducer";
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


export const AppRoot = React.memo(() => {
    console.log('AppRoot')

    const dispatch = useDispatch()
    const todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks)

//todolistFuns
    const addTodolist = useCallback((titleTodolist: string) => {
        dispatch(addToDoListAC(titleTodolist))
    }, [])
    const removeTodolist = useCallback((todolistId: string) => {
        dispatch(removeToDoListAC(todolistId))
    }, [])
    const changeToDoListTitle = useCallback((todolistId: string, titleTodolist: string) => {
        dispatch(changeToDoListTitleAC(todolistId, titleTodolist))
    }, [])
    const changeToDoListFilter = useCallback((todolistId: string, filter: FilterType) => {
        dispatch(changeToDoListFilterAC(todolistId, filter))
    }, [])

//taskFuns
    const addTask = useCallback((todolistId: string, taskTitle: string) => {
        dispatch(addTaskAC(todolistId, taskTitle))
    }, [])
    const removeTask = useCallback((todolistId: string, taskId: string) => {
        dispatch(removeTaskAC(todolistId, taskId))
    }, [])
    const changeTaskStatus = useCallback((todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(todolistId, taskId, isDone))
    }, [])
    const changeTaskTitle = useCallback((todolistId: string, taskId: string, taskTitle: string) => {
        dispatch(changeTaskTitleAC(todolistId, taskId, taskTitle))
    }, [])


    return (


        <div className={appRootStyle.appContainer}>
            <div>
                <AddItemForm callback={addTodolist}/>
            </div>
            <div className={appRootStyle.todolists}>
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
                                filter={todolist.filter}
                                changeToDoListFilter={changeToDoListFilter}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
});
import React from 'react';
import appRootStyle from './appRoot.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {addToDoListAC} from "./store/todolist-reducer";
import {AppRootStateType} from "./store/storeToDoList";
import {ToDoList} from "./ToDoList";
import {debug} from "util";


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


    return (
        <div className={appRootStyle.appContainer}>
            <AddItemForm callback={addTodolist}/>
            <div>
                {
                    todolists.map((todolist) => {
                        return (
                            <><ToDoList
                                title={todolist.title}
                                // tasks={tasks}
                                // addTodolist={addTodolist}
                            /> </>
                        )
                    })
                }
            </div>


        </div>
    );
};
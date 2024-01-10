import React from 'react';
import appRootStyle from './appRoot.module.css'
import {ToDoList} from "./ToDoList";


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
    return (
        <div className={appRootStyle.appContainer}>
            <ToDoList/>
        </div>
    );
};
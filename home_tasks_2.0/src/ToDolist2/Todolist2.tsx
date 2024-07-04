import React, {useEffect} from 'react';
import todo from './todolist2.module.css'
import {useDispatch, useSelector} from "react-redux";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {deleteTodolistTC, setTodolistTC, updateTodolistTC} from "./store/todolist-reducer2";
import {setTasksTC} from "./store/task-reducer2";
import {SuperButton2} from "./components/SuperButton2";
import {EditableSpan2} from "./components/EditableSpan2";


export const Todolist2 = () => {

    const dispatch: ThunkDispatch<TodolistRootStateType, any, AnyAction> = useDispatch();
    const todolists = useSelector((state: TodolistRootStateType) => state.todolists);
    const tasks = useSelector((state: TodolistRootStateType) => state.tasks);


    useEffect(() => {
        dispatch(setTodolistTC());
    }, []);

    useEffect(() => {
        const todolistIds = todolists.map((todolist) => todolist.id);
        todolistIds.forEach((todolistId) => {
            dispatch(setTasksTC(todolistId));
        });
    }, [todolists]);


    return (
        <>
            {
                todolists.map((todolist) => {

                    const deleteTodolist = () => {
                        dispatch(deleteTodolistTC(todolist.id))
                        console.log(`deleted: ${todolist.title}`)
                    }

                    const updateTodolist = (newTitle: string) => {
                        dispatch(updateTodolistTC(todolist.id, newTitle))
                    }

                    return (
                        <div className={todo.container}>
                            <div key={todolist.id} className={todo.title}>
                                <EditableSpan2 title={todolist.title} callback={updateTodolist}/>
                                <SuperButton2 title={'x'} callback={deleteTodolist}/>
                            </div>
                            <div className={todo.addItemForm}>
                                <input/>
                                <button>+</button>
                            </div>
                            <div className={todo.task}>
                                {tasks[todolist.id] && tasks[todolist.id].map((task) => (
                                    <div key={task.id}>
                                        <input type='checkbox'/>
                                        {task.title}
                                        <SuperButton2 title={'x'} callback={() => {
                                        }}/>
                                    </div>
                                ))}
                            </div>
                            <div className={todo.buttons}>
                                <SuperButton2
                                    title={'All'}
                                    callback={() => {
                                    }}
                                />
                                <SuperButton2
                                    title={'Complete'} callback={() => {
                                }}
                                />
                                <SuperButton2
                                    title={'New'}
                                    callback={() => {
                                    }}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
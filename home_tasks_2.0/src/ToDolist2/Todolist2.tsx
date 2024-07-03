import React, {useEffect} from 'react';
import todo from './todolist2.module.css'
import {useDispatch, useSelector} from "react-redux";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {deleteTodolistTC, setTodolistTC} from "./store/todolist-reducer2";
import {setTasksTC} from "./store/task-reducer2";


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

                    return (
                        <div className={todo.container}>
                            <div key={todolist.id} className={todo.title}>
                                Title: {todolist.title}
                                <button onClick={deleteTodolist}>x</button>
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
                                        <button>x</button>
                                    </div>
                                ))}
                            </div>
                            <div className={todo.buttons}>
                                <button>All</button>
                                <button>Complete</button>
                                <button>New</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
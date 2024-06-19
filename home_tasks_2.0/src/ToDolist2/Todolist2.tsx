import React, {useEffect} from 'react';
import todo from './todolist2.module.css'
import {useDispatch, useSelector} from "react-redux";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {setTodolistTC} from "./store/todolist-reducer2";

export const Todolist2 = () => {

    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const todolists = useSelector((state: TodolistRootStateType) => state.todolists.totolist)

    useEffect(() => {
        dispatch(setTodolistTC())
    }, [])


    return (

        <>
            {
                todolists.map((todolist) => (
                    <div className={todo.container}>
                        <div key={todolist.id} className={todo.title}>
                            Title: {todolist.title}
                            <button>x</button>
                        </div>
                        <div className={todo.addItemForm}>
                            <input/>
                            <button>+</button>
                        </div>
                        <div className={todo.task}>
                            <div>
                                <input type='checkbox'/>
                                <>Task</>
                                <button>x</button>
                            </div>
                        </div>
                        <div className={todo.buttons}>
                            <button>All</button>
                            <button>Complete</button>
                            <button>New</button>
                        </div>
                    </div>

                ))
            }

        </>
    );
};
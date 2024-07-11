import React, {useEffect} from 'react';
import todo from './todolist2.module.css';
import {useDispatch, useSelector} from "react-redux";
import {TodolistRootStateType} from "./store/storeToDoList2";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {deleteTodolistTC, filterTodolistAC, setTodolistTC, updateTodolistTC} from "./store/todolist-reducer2";
import {addTaskTC, removeTasksAC, removeTaskTC, setTasksTC} from "./store/task-reducer2";
import {SuperButton2} from "./components/SuperButton2";
import {EditableSpan2} from "./components/EditableSpan2";
import {AddItemForm2} from "./components/AddItemForm2";


export const Todolist2 = () => {

    const dispatch: ThunkDispatch<TodolistRootStateType, any, AnyAction> = useDispatch();
    const todolists = useSelector((state: TodolistRootStateType) => state.todolists);
    const tasks = useSelector((state: TodolistRootStateType) => state.tasks);
    const filter = useSelector((state: TodolistRootStateType) => state.todolists.find(t => t.filter));

    console.log(filter)


    useEffect(() => {
        dispatch(setTodolistTC());
    }, []);

    useEffect(() => {
        const todolistIds = todolists.map((todolist) => todolist.id);
        todolistIds.forEach((todolistId) => {
            dispatch(setTasksTC(todolistId));
        });
    }, [todolists]);

    const removeTask = (todolistId: string, taskId: string) => {
        dispatch(removeTaskTC(todolistId, taskId))
    }


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

                    const addTask = (newTaskTile: string) => {
                        dispatch(addTaskTC(todolist.id, newTaskTile))
                    }

                    return (
                        <div className={todo.container}>
                            <div key={todolist.id} className={todo.title}>
                                <EditableSpan2 title={todolist.title} callback={updateTodolist}/>
                                <SuperButton2 title={'x'} callback={deleteTodolist}/>
                            </div>
                            <div>
                                <AddItemForm2 callback={addTask}/>
                            </div>
                            <div className={todo.task}>
                                {tasks[todolist.id] && tasks[todolist.id].map((task) => (
                                    <div key={task.id}>
                                        <input type='checkbox'/>
                                        {task.title}
                                        <SuperButton2 title={'x'} callback={() => removeTask(todolist.id, task.id)}/>
                                    </div>
                                ))}
                            </div>
                            <div className={todo.buttons}>
                                <SuperButton2
                                    title={'All'}
                                    callback={() => dispatch(filterTodolistAC(todolist.id, 'All'))}
                                    //className={filter === 'All' ? 'active' : ''}
                                />
                                <SuperButton2
                                    title={'Active'}
                                    callback={() => dispatch(filterTodolistAC(todolist.id, 'Active'))}
                                    // className={filter === 'Active' ? 'active : ''}
                                />
                                <SuperButton2
                                    title={'Complete'}
                                    callback={() => dispatch(filterTodolistAC(todolist.id, 'Complete'))}
                                    // className={filter === 'Complete' ? 'active : ''}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
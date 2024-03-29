import React, {useCallback} from 'react';
import todolistStyle from './todolist.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {FilterType, TaskType} from "./AppRoot";
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
    changeTaskTitle: (todolistId: string, taskId: string, taskTitle: string) => void
    filter: FilterType
    changeToDoListFilter: (todolistId: string, filter: FilterType) => void
}


export const ToDoList = React.memo((props: ToDoListType) => {
    console.log('ToDoList')

    const addTask = useCallback((taskTitle: string) => {
        props.addTask(props.todolistId, taskTitle)
    }, [props.todolistId])
    const removeToDoList = useCallback(() => {
        props.removeTodolist(props.todolistId)
    }, [props.todolistId])
    const removeTask = useCallback((taskId: string) => {
        props.removeTask(props.todolistId, taskId)
    }, [props.todolistId])

    const onChangeToDoListTitle = useCallback((newTitle: string) => {
        props.changeToDoListTitle(props.todolistId, newTitle)
    }, [props.todolistId])
    const onAllHandlerFilter = useCallback(() => {
        props.changeToDoListFilter(props.todolistId, 'all')
    }, [props.todolistId])
    const onActiveHandlerFilter = useCallback(() => {
        props.changeToDoListFilter(props.todolistId, 'active')
    }, [props.todolistId])
    const onCompletedHandlerFilter = useCallback(() => {
        props.changeToDoListFilter(props.todolistId, 'completed')
    }, [])


    //for filters
    let tasksForToDoList = props.tasks
    if (props.filter === 'active') {
        tasksForToDoList = props.tasks.filter(t => t.isDone === false)
    }
    if (props.filter === 'completed') {
        tasksForToDoList = props.tasks.filter(t => t.isDone === true)
    }

    return (
        <div className={todolistStyle.toDo}>
            <div className={todolistStyle.toDoTitle}>
                <>Title:</>
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

                        const changeTaskTitle = (newTitle: string) => {
                            props.changeTaskTitle(props.todolistId, task.id, newTitle)
                        }
                        return (
                            <div key={task.id}>
                                <ul>
                                    <li>
                                        <SuperCheckBox isDone={task.isDone} callback={changeTaskStatus}/>
                                        <EditableSpan title={task.title} callback={changeTaskTitle}/>
                                        <button onClick={() => removeTask(task.id)}>X</button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className={todolistStyle.buttons}>
                <button onClick={onAllHandlerFilter}>All</button>
                <button onClick={onActiveHandlerFilter}>Active</button>
                <button onClick={onCompletedHandlerFilter}>Completed</button>
            </div>
        </div>
    );
});
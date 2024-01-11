import React from 'react';
import todolistStyle from './todolist.module.css'
import {AddItemForm} from "./components/AddItemForm";
import {TasksType, TaskType} from "./AppRoot";


type ToDoListType = {
    // tasks: TasksType
    title: string
    // addTodolist: (titleTodolist: string) => void
}


export const ToDoList = (props: ToDoListType) => {

    const addTask = (titleTodolist: string) => {
        // props.addTodolist(titleTodolist)
    }

    // let tasksForToDoList = props.tasks
    // console.log(tasksForToDoList)


    return (
        <div className={todolistStyle.toDo}>
            <div className={todolistStyle.toDoTitle}>
                <h4>{props.title}</h4>
                <button>X</button>
            </div>
            <div className={todolistStyle.toDoInput}>
                <AddItemForm callback={addTask}/>
            </div>
            <div className={todolistStyle.list}>

                {
                    // props.tasks.map((task) => {
                    //     return(
                    //         <div>
                    //             task= {task}
                    //         </div>
                    //     )
                    // })
                }
            </div>
            <div className={todolistStyle.buttons}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

{/*<ul>*/
}
{/*    <li>*/
}
{/*        <input type="checkbox"/>*/
}
{/*        <span>task 1</span>*/
}
{/*        <button>X</button>*/
}
{/*    </li>*/
}
{/*    <li>*/
}
{/*        <input type="checkbox"/>*/
}
{/*        <span>task 1</span>*/
}
{/*        <button>X</button>*/
}
{/*    </li>*/
}
{/*</ul>*/
}
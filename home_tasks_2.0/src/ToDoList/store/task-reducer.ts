import {TasksType} from "../AppRoot";


const InitialState: TasksType = {}

export const tasksReducer = (state: TasksType = InitialState, action: any): TasksType => {
    switch (action.type) {
        default:
            return state
    }
}

export const addTaskAC = () => {
    return {
        type: ''
    }
}
export const removeTaskAC = () => {
    return {
        type: ''
    }
}
export const changeTaskTitleAC = () => {
    return {
        type: ''
    }
}
export const changeTaskStatusAC = () => {
    return {
        type: ''
    }
}
import {Dispatch} from "redux";
import {isAxiosError} from "axios";
import {setAppErrorAC} from "../../app/app-reducer";

type ServerError = {
    errorMessages: Array<{
        message: string
        field: string
    }>
}


export const handleError = (e: unknown, dispatch: Dispatch) => {
    let errorMessage = ''
    if (isAxiosError<ServerError>(e)) {
        errorMessage = e.response
            ? e.response.data.errorMessages[0].message
            : e.message
    } else {
        errorMessage = (e as Error).message
    }
    dispatch(setAppErrorAC(errorMessage))
}
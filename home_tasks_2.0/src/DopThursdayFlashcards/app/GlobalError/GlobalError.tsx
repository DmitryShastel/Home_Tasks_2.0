import {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {useAppDispatch, useAppSelector} from "../store";
import {selectAppError} from "../app-selectors";
import {setAppErrorAC} from "../app-reducer";
import 'react-toastify/dist/ReactToastify.css';


//Errors
//case-1: ошибка запроса (приходит с бэкэнда) - axios создает объект ошибки, в response.data помещает ответ сервера
//case-2: network error (на стороне клиента) - axios создает объект ошибки, текст ошибки берем из поля message
//case-3: ошибка вне запроса - генерирует JS - имеет message


export const GlobalError = () => {
    const errorMessage = useAppSelector(selectAppError)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {theme: "light", autoClose: 3000})
            toast.onChange(({status}) => {
                if (status === 'added') {
                    dispatch(setAppErrorAC(null))
                }
            })
        }
    }, [errorMessage])

    return <ToastContainer theme = "light" autoClose = {3000}/>
}
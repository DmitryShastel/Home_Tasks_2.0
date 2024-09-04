import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import s from "../Todo/todo.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {fetchUserTodo} from "../../store/reducers/ActionCreators";
import {SuperButton} from "../../components/Button/superButton";

export const TodoPage = () => {

    const dispatch = useAppDispatch();
    const {userTodo} = useAppSelector(state => state.userReducer);
    const {userId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUserTodo(Number(userId)))
    }, [])


    const getUserInfoCallback = () => {
        navigate(`/users/${userId}`)
    }

    return (
        <div className={s.container}>
            <div className={s.list}>
                {userTodo.map((todo) => (
                    <ul key={todo.id}>
                        <li>
                            <span>{todo.title}</span>
                            <input type='checkbox' checked={todo.completed}></input>
                        </li>
                    </ul>
                ))}
                <div className={s.button}>
                    <SuperButton title={'Back to user info'} callback={getUserInfoCallback}/>
                </div>
            </div>
        </div>
    );
};
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {NavLink} from "react-router-dom";
import s from './userList.module.css'
import {fetchUsers} from "../../store/reducers/ActionCreators";


export const UserList = () => {

    const dispatch = useAppDispatch()
    const {users} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    return (
        <div className={s.container}>
            <div className={s.list}>
                {users.map((user) => (
                    <ul key={user.id}>
                        <li>
                            <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

import React from 'react';
import userPageStyle from './userPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {followAC, unFollowAC} from "../../store/userReducer";

export const UserPage = () => {

    const dispatch = useDispatch()
    const users = useSelector((state: AppRootStateType) => state.users.users)

    const changeButtonTitle = (id: number) => {
        const currentUser = users.find(user => user.id === id);
        if (currentUser) {
            const followed = currentUser.followed;
            if (followed) {
                dispatch(unFollowAC(id));
            } else {
                dispatch(followAC(id));
            }
        }
    };

    const userOfList = users.map((user) => {

        return (
            <div key={user.id}>
                <div>
                    <img src={user.photoUrl}/>
                </div>
                {user.followed
                    ? (
                        <button onClick={() => changeButtonTitle(user.id)}>
                            Unfollow
                        </button>
                    ) : (
                        <button onClick={() => changeButtonTitle(user.id)}>
                            Follow
                        </button>
                    )}
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
            </div>
        );
    });

    return (
        <div className={userPageStyle.container}>
            {userOfList}
        </div>
    );
};
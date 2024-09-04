import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import s from "./userInfo.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {fetchUserInfo} from "../../store/reducers/ActionCreators";
import {SuperButton} from "../../components/Button/superButton";


export const UserInfo = () => {

    const dispatch = useAppDispatch();
    const {userInfo, isLoading} = useAppSelector(state => state.userReducer);
    const {userId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUserInfo(Number(userId)));
    }, [])

    if (!userInfo || Object.keys(userInfo).length === 0) {
        return <>{isLoading && <h3>Downloading . . .</h3>}</>;
    }

    const getBackCallback = () => {
        navigate('/userList')
    }

    const getUserTodoCallback = () => {
        navigate(`/users/${userId}/todos`)
    }

    const getUserAlbumCallback = () => {
        navigate(`/users/${userId}/albums`)
    }

    const getUserPostsCallback = () => {
        navigate(`/posts/${userId}`)
    }


    return (
        <div>
            <div className={s.info}>
                <ul>
                    <li>Name: {userInfo.name}</li>
                    <li>Username: {userInfo.username}</li>
                    <li>City: {userInfo.address.city}</li>
                    <li>Company: {userInfo.company.name}</li>
                </ul>
            </div>
            <div className={s.buttonContainer}>
                <div className={s.buttonWrapper}>
                    <SuperButton title={'Get todo'} callback={getUserTodoCallback}/>
                </div>
                <div className={s.buttonWrapper}>
                    <SuperButton title={'Get album'} callback={getUserAlbumCallback}/>
                </div>
                <div className={s.buttonWrapper}>
                    <SuperButton title={'Get posts'} callback={getUserPostsCallback}/>
                </div>
                <div className={s.buttonWrapper}>
                    <SuperButton title={'Back'} callback={getBackCallback}/>
                </div>
            </div>
        </div>
    );
};
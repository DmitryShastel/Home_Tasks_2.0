import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useNavigate, useParams} from "react-router-dom";
import {createUserPost, deleteUserPost, fetchUserPosts, updateUserPost} from "../../store/reducers/ActionCreators";
import s from "../Album/albumPage.module.css";
import {SuperButton} from "../../components/Button/superButton";


export const UserPosts = () => {

    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.userReducer)
    const {userId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchUserPosts(Number(userId)))
    }, [])


    const getUserInfo = () => {
        navigate(`/users/${userId}`)
    }

    const createUserPostCallback = () => {
            dispatch(createUserPost());
    }

    const updateUserPostCallback = () => {
        dispatch(updateUserPost(Number(userId)));
    }

    const deleteUserPostCallback = () => {
        dispatch(deleteUserPost(Number(userId)));
    }


    return (
        <div className={s.container}>
            <div className={s.list}>
                {
                    <ul>
                        <li><h4>Title: {posts.title}</h4> </li>
                        <li>Message: {posts.body}</li>
                    </ul>
                }
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <SuperButton title={'Back to user info'} callback={getUserInfo}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={'Create post'} callback={createUserPostCallback}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={'Update post'} callback={updateUserPostCallback}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={'Delete post'} callback={deleteUserPostCallback}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={'Get Comments'} callback={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};
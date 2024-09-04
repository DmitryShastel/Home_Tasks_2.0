import React, {useEffect} from 'react';
import s from "../Album/albumPage.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUserAlbum} from "../../store/reducers/ActionCreators";
import {SuperButton} from "../../components/Button/superButton";

export const AlbumPage = () => {

    const dispatch = useAppDispatch()
    const {albums} = useAppSelector(state => state.userReducer)
    const {albumsId} = useParams();
    const {userId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUserAlbum(Number(userId)))
    }, [])


    const getUserInfo = () => {
        navigate(`/users/${userId}`)
    }

    const getUserAlbumPhoto = () => {
        navigate(`/albums/${albumsId}/photos`)
    }

    return (
        <div className={s.container}>
            <div className={s.list}>
                {albums.map((album) => (
                    <ul key={album.id}>
                        <li>{album.title}</li>
                    </ul>
                ))}
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <SuperButton title={'Back to user info'} callback={getUserInfo}/>
                </div>
                <div className={s.button}>
                    <SuperButton title={'Get photo'} callback={getUserAlbumPhoto}/>
                </div>
            </div>
        </div>
    );
};
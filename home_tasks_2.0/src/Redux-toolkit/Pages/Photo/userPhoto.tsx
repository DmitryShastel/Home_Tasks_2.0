import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useNavigate, useParams} from "react-router-dom";
import s from "../Album/albumPage.module.css";
import {SuperButton} from "../../components/Button/superButton";
import {fetchUserAlbumPhoto} from "../../store/reducers/ActionCreators";

export const UserPhoto = () => {

    const dispatch = useAppDispatch()
    const {albumPhoto} = useAppSelector(state => state.userReducer)
    const {userId} = useParams();
    const {albumsId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchUserAlbumPhoto(Number(albumsId)))
    }, [])


    const getUserAlbum = () => {
        navigate(`/users/${userId}/albums`)
    }


    return (
        <div className={s.container}>
            <div className={s.list}>
                {albumPhoto.map((photo) => (
                    <ul key={photo.id}>
                        <li>{photo.title}</li>
                        <>{photo.url}</>
                    </ul>
                ))}
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <SuperButton title={'Back to user album'} callback={getUserAlbum}/>
                </div>
            </div>
        </div>
    );
};
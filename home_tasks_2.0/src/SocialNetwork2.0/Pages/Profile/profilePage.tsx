import React, {useEffect, useState} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType2} from '../../store/store';
import {Grid, List, ListItem, ListItemText, TextField, Typography} from '@mui/material';
import {AddItemForm} from "../../components/AddItemForm/addItemForm";
import {useParams} from 'react-router-dom';
import {
    addPostTC,
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC,
    UserProfileType,
} from '../../store/profileReducer';
import {CircularIndeterminate} from "../../components/Loader/loader";

export const ProfilePage = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const posts = useSelector((state: AppRootStateType2) => state.posts.posts);
    const userStatus = useSelector((state: AppRootStateType2) => state.posts.status);
    const userProfile = useSelector((state: AppRootStateType2) => state.posts.profile) as UserProfileType | null;
    const isFetching = useSelector((state: AppRootStateType2) => state.users.isFetching);
    const [isEditing, setIsEditing] = useState(false);
    const [editedStatus, setEditedStatus] = useState(userStatus);
    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfileTC(Number(userId)));
            dispatch(getUserStatusTC(Number(userId)));
        } else {
            dispatch(getUserProfileTC(Number(10)));
            dispatch(getUserStatusTC(Number(10)));
        }
    }, [dispatch, userId]);
    useEffect(() => {
        setEditedStatus(userStatus);
        const handleClickOutside = (event: any) => {
            const statusElement = document.getElementById('user-status');
            if (statusElement && !event.target.closest('#user-status')) {
                setIsEditing(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userStatus]);

    const addPost = (profileTitle: string) => {
        dispatch(addPostTC(profileTitle));
    };
    const handleStatusDoubleClick = () => {
        setIsEditing(true);
    };
    const handleStatusSave = () => {
        dispatch(updateUserStatusTC(editedStatus));
        setIsEditing(false);
    };


    return (
        <>
            {isFetching && <CircularIndeterminate/>}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{marginLeft: '20px'}}>
                        User Photo:
                    </Typography>
                    <Typography variant="h6" style={{marginLeft: '20px'}}>
                        {userProfile && userProfile.photos && userProfile.photos.large ? (
                            <img src={userProfile.photos.large} alt="User Photo"/>
                        ) : (
                            <div>
                                <img
                                    src={'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688'}
                                    style={{
                                        width: '300px',
                                        height: '300px',

                                    }}
                                    alt="Default User Photo"
                                />
                            </div>
                        )}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {isEditing ? (
                        <TextField
                            value={editedStatus}
                            onChange={(e) => setEditedStatus(e.target.value)}
                            onBlur={handleStatusSave}
                            autoFocus
                            sx={{marginLeft: '20px'}}
                        />
                    ) : (
                        <Typography
                            variant="h6"
                            style={{marginLeft: '20px'}}
                            onDoubleClick={handleStatusDoubleClick}
                            id="user-status">
                            User Status: {userStatus}
                        </Typography>
                    )}
                </Grid>
                <Grid style={{marginLeft: '20px', marginTop: '20px'}}>
                    <List>
                        {posts.map((el) => (
                            <ListItem key={el.id}>
                                <Grid container spacing={12}>
                                    <Grid item xs={6}>
                                        <ListItemText primary={el.message}
                                                      style={{fontStyle: 'italic', color: 'blueviolet'}}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListItemText primary={`Likes: ${el.like}`} style={{color: 'gray'}}/>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <AddItemForm callback={addPost} title={'Add post'}/>
                </Grid>
            </Grid>
        </>
    );
};
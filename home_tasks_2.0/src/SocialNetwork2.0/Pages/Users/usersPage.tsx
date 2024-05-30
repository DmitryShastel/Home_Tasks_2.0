import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {Avatar, Button, Grid, List, ListItem, Pagination, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import {AppRootStateType2} from "../../store/store";
import {followUsersTC, InitialUsersStateType, setUsersTC, unFollowUsersTC, UserType} from "../../store/userReducer";
import {CircularIndeterminate} from "../../components/Loader/loader";

export const UsersPage = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const users = useSelector((state: AppRootStateType2) => state.users) as InitialUsersStateType;
    const totalCount = useSelector((state: AppRootStateType2) => state.users.totalCount);
    const perPage = useSelector((state: AppRootStateType2) => state.users.perPage);
    const isFetching = useSelector((state: AppRootStateType2) => state.users.isFetching);
    const isLoading = useSelector((state: AppRootStateType2) => state.users.isLoadingDataServer)
    const pagesCount = Math.ceil(totalCount / perPage);
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        dispatch(setUsersTC(selectedPage, perPage));
    }, [selectedPage, perPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setSelectedPage(page);
    };

    function BasicPagination() {
        return (
            <Stack spacing={2} sx={{marginBottom: '20px'}}>
                <Pagination
                    count={pagesCount}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    page={selectedPage}
                    onChange={handlePageChange}
                    sx={{
                        '& .Mui-selected': {
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        },
                    }}
                />
            </Stack>
        );
    }

    const followHandler = (userId: number) => {
        return dispatch(followUsersTC(userId))
    }

    const unFollowHandler = (userId: number) => {
        return dispatch(unFollowUsersTC(userId))
    }

    return (
        <>
            {isFetching && <CircularIndeterminate/>}

            <List>
                {users.users.map((user: UserType) => (
                    <ListItem key={user.id}>
                        <Grid container direction="column">
                            <Grid item>
                                <Avatar
                                    src={user.photos && user.photos.large ? user.photos.large : users.photoUrl}
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">{user.name}</Typography>
                                <Typography variant="body1">Status: {user.status}</Typography>
                                {!user.followed ? (
                                    <Button
                                        disabled={isLoading.some(id => id === user.id)}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => followHandler(user.id)}>
                                        Follow
                                    </Button>
                                ) : (
                                    <Button
                                        disabled={isLoading.some(id => id === user.id)}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => unFollowHandler(user.id)}>
                                        Unfollow
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
            <BasicPagination/>
        </>
    );
};
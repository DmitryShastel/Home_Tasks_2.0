export {}

// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {ThunkDispatch} from 'redux-thunk';
// import {AnyAction} from 'redux';
// import {Avatar, Button, Grid, List, ListItem, ListItemText, Pagination} from '@mui/material';
// import Typography from '@mui/material/Typography';
// import {AppRootStateType2} from "../storeDop/storeDop";
// import {InitialUsersStateType, setUsersTC, UserType} from "../storeDop/userReducer";
//
// export const UsersPage = () => {
//     const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
//     const users = useSelector((state: AppRootStateType2) => state.users) as InitialUsersStateType;
//     const totalCount = useSelector((state: AppRootStateType2) => state.users.totalCount);
//     const currentPage = useSelector((state: AppRootStateType2) => state.users.currentPage);
//     const perPage = useSelector((state: AppRootStateType2) => state.users.perPage);
//     const pagesCount = Math.ceil(totalCount / perPage);
//
//     useEffect(() => {
//         dispatch(setUsersTC(currentPage, perPage));
//     }, [currentPage]);
//
//     const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
//         dispatch(setUsersTC(page, perPage));
//     };
//
//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             dispatch(setUsersTC(currentPage - 1, perPage));
//         }
//     };
//
//     const handleNextPage = () => {
//         if (currentPage < pagesCount) {
//             dispatch(setUsersTC(currentPage + 1, perPage));
//         }
//     };
//
//     return (
//         <div>
//             <Pagination
//                 count={pagesCount}
//                 page={currentPage}
//                 onChange={handlePageChange}
//                 showFirstButton
//                 showLastButton
//                 siblingCount={2}
//                 boundaryCount={2}
//                 variant="outlined"
//                 shape="rounded"
//                 disabled={users.isLoading}
//             />
//
//             <List>
//                 {users.users.map((user: UserType) => (
//                     <ListItem key={user.id}>
//                         <Grid container>
//                             <Grid item>
//                                 <Avatar
//                                     src={user.photos && user.photos.large ? user.photos.large : users.photoUrl}
//                                     style={{
//                                         width: '70px',
//                                         height: '70px',
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item>
//                                 <ListItemText
//                                     primary={
//                                         <>
//                                             <Typography variant="body1">{user.name}</Typography>
//                                             <Typography variant="body1">Status: {user.status}</Typography>
//                                         </>
//                                     }
//                                     secondary={<Button variant="contained" color="primary">Follow</Button>}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                 ))}
//             </List>
//
//             <Button onClick={handlePrevPage} disabled={currentPage === 1 || users.isLoading}>
//                 Prev
//             </Button>
//             <Button onClick={handleNextPage} disabled={currentPage === pagesCount || users.isLoading}>
//                 Next
//             </Button>
//         </div>
//     );
// };



// const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
//     return dispatch(setUsersTC(page, perPage));
// };

// function BasicPagination() {
//     return (
//         <Stack spacing={2}>
//             <Pagination
//                 count={pagesCount}
//                 variant="outlined"
//                 shape="rounded"
//                 color="primary"
//                 page={currentPage}
//                 onChange={handlePageChange}
//             />
//         </Stack>
//     );
// }
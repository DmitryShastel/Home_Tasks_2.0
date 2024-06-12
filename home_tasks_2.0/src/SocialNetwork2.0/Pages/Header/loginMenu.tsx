import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType2} from "../../store/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {setAuthDataTC} from "../../store/authReducer";

export const LoginMenu = () => {

    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const isAuth = useSelector((state: AppRootStateType2) => state.authMe.authMe)
    const login = useSelector((state: AppRootStateType2) => state.authMe.login)
    console.log(isAuth, login)

    useEffect(() => {
        dispatch(setAuthDataTC());
    }, [dispatch]);

    return (
        <>
            {isAuth ? login : <Link to='/login' style={{textDecoration: 'none'}}>
                <Button
                    color="info"
                    variant="outlined"
                    sx={{mr: 1}}
                >
                    Login
                </Button>
            </Link>
            }
        </>
    );
};
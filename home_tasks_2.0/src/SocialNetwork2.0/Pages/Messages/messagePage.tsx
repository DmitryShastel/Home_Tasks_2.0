import React from 'react';
import {AddItemForm} from "../../components/AddItemForm/addItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType2} from "../../store/store";
import {Grid, List, ListItem, ListItemText} from "@mui/material";
import {addMessageTC} from "../../store/messageReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export const MessagePage = () => {

    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch()

    let messages = useSelector((state: AppRootStateType2) => state.messages.messages)
    let dialogs = useSelector((state: AppRootStateType2) => state.messages.dialogs)


    const addMessage = (messageTitle: string) => {
        dispatch(addMessageTC(messageTitle))
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <List>
                        {dialogs.map((el) => (
                            <ListItem key={el.id}>
                                <ListItemText primary={el.name}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        {messages.map((el) => (
                            <ListItem key={el.id}>
                                <ListItemText primary={el.message}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <AddItemForm callback={addMessage}/>
        </div>
    );
};
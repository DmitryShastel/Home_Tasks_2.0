import React, {useState} from 'react';
import {AddItemForm} from "../../components/AddItemForm/addItemForm";

export const MessagePage = () => {

    
    const addMessage = (messageTitle: any) => {

    }

    return (
        <div>
            <AddItemForm callback={addMessage}/>
        </div>
    );
};
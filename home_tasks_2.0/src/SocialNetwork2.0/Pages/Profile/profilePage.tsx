import React from 'react';
import {AddItemForm} from "../../components/AddItemForm/addItemForm";

export const ProfilePage = () => {
    return (
        <div>
            <div>
                <div>Photo</div>
                <div>Name</div>
                <div>Status</div>
            </div>

            <div>
                <AddItemForm
                    callback={() => {}}
                    title={'Add post'}/>
            </div>

            <div>

            </div>
        </div>
    );
};
import React from 'react';
import userPageStyle from './userPage.module.css'

export const UserPage = () => {

    const userState = {
        users: [
            {
                id: 1,
                photoUrl: 'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688',
                name: 'Dima',
                followed: false,
                status: 'test status',
                location: {country: 'Belarus', city: 'Minsk'},
            },
            {
                id: 2,
                photoUrl: 'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688',
                name: 'Alex',
                followed: false,
                status: 'test status2',
                location: {country: 'Russia', city: 'Moscow'},
            },
        ]
    }

    const userOfList = userState.users.map(user =>
        <>
            <div><img src={user.photoUrl}/></div>
            <button>Follow</button>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
        </>
    )


    return (
        <div className={userPageStyle.container}>
            {userOfList}
        </div>
    );
};
type UserType = {
    id: number
    photoUrl: string
    name: string
    followed: boolean
    status: string
    location: LocationType
}
type LocationType = {
    country: string
    city: string
}
type UsersType = {
    users: UserType[]
}


type FollowACType = (id: number) => FollowActionType
type FollowActionType = {
    type: 'FOLLOW',
    id: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW',
    id: number
}
type UnFollowedACType = (id: number) => UnfollowActionType

const InitialState: UsersType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688',
            name: 'Dima',
            followed: true,
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

type ActionsType = FollowActionType | UnfollowActionType

export const userReducer = (state: UsersType = InitialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }
        }
        default:
            return state;
    }
}

export const followAC: FollowACType = (id: number): FollowActionType => {
    return {
        type: 'FOLLOW',
        id,
    }
}
export const unFollowAC: UnFollowedACType = (id: number): UnfollowActionType => {
    return {
        type: 'UNFOLLOW',
        id,
    }
}
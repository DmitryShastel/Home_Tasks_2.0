import {
    followUserAC,
    InitialUsersStateType,
    setTotalCountAC,
    setUsersAC,
    UnfollowUserAC,
    userReducer2,
    UserType
} from "./userReducer";

const users = [
    {
        id: 1,
        name: 'John Doe',
        photos: {small: '', large: ''},
        status: '',
        followed: false,
        photoUrl: '',
        totalCount: 0,
        currentPage: 1,
        perPage: 5,
        isFetching: false
    },
    {
        id: 2,
        name: 'Jane Smith',
        photos: {small: '', large: ''},
        status: '',
        followed: false,
        photoUrl: '',
        totalCount: 0,
        currentPage: 1,
        perPage: 5,
        isFetching: false
    }
]

let InitialState: InitialUsersStateType

beforeEach(() => {
    InitialState = {
        users: [] as UserType[],
        photoUrl: 'https://hcgart.com/cdn/shop/products/DakotaRandall_AgentSmith.png?v=1639788688',
        totalCount: 0,
        currentPage: 1,
        perPage: 5,
        isFetching: false,
        isLoadingDataServer: [] as number[]
    }
})

test('the count of users is set up successfully', () => {

    const action = setUsersAC(users);
    const nextState = userReducer2(InitialState, action);

    expect(nextState.users).toEqual(users);
    expect(nextState.totalCount).toBe(0)
})
test('the total count should be displayed correctly', () => {

    const totalCount = 10
    const action = setTotalCountAC(totalCount)

    const newState = userReducer2(InitialState, action)

    expect(newState.totalCount).toBe(10)
})
test('should update the followed property to true for the specified user ID', () => {

    const action = followUserAC(1);
    const newState = userReducer2(InitialState, action);

    expect(newState.users[0].followed).toBe(true);
    expect(newState.users[1].followed).toBe(false);
});
test('should update the followed property to false for the specified user ID', () => {

    const action = UnfollowUserAC(2);
    const newState = userReducer2(InitialState, action);

    expect(newState.users[0].followed).toBe(true);
    expect(newState.users[1].followed).toBe(false);
});
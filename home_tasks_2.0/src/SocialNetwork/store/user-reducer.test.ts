import {followAC, unFollowAC, userReducer, UsersType} from "./userReducer";

describe('userReducer change property followed in state', () => {
    let InitialState: UsersType;

    beforeEach(() => {
        InitialState = {
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
    })
    test('the property followed should be changed to true', () => {
        const id = 1;
        const action = followAC(id)

        const newState = userReducer(InitialState, action)

        expect(newState.users[0].followed).toBe(true)
        expect(newState.users[1].followed).toBe(false)

    })
    test('the property followed should be changed to false', () => {
        const id = 2;
        const action = unFollowAC(id)

        const newState = userReducer(InitialState, action)

        expect(newState.users[0].followed).toBe(true)
        expect(newState.users[1].followed).toBe(false)

    })
})



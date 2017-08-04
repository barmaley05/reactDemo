const initialState = {
    users: ['Dev'],
    userProfile: {
        repos: []
    }
};

const userReducer = function(state = initialState, action) {

    switch(action.type) {

        case 'ADD_USERS':
            return Object.assign({}, state, { users: action.users });
    }

    return state;

}

export default userReducer;
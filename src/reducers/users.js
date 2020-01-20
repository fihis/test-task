import MockUsers from '../infrastructure/Mocks'

const initialState = {
    users: MockUsers,
    editableUser: null
}

const users = (state = initialState, action) => {
    console.log('reducer state', state);
    switch (action.type) {
        case 'EDIT_USER':
            return {
                ...state,
                editableUser: state.users.find(user => user.id === action.id)
            };

        case 'SAVE_USER':
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === state.editableUser.id) 
                        return state.editableUser;
                    return user;
                    }),
                editableUser: null
            }

        case 'CLOSE_DETAILS':
            return {
                ...state,
                editableUser: null
            }

        case 'CHANGE_USER_DETAILS':
            return {
                ...state,
                editableUser: { ...state.editableUser, [action.target]: action.value }
            }

        default:
            return state;
    }
}

export default users
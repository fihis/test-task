import MockUsers from '../infrastructure/Mocks'

const initialState = {
    users: MockUsers,
    editableUser: null
}

//console.log('initial state', initialState)


const users = (state = initialState, action) => {
    console.log('reducer state', state);
    switch (action.type) {
        case 'EDIT_USER':
            //console.log('find user in reducer',state.users.find( user => user.id === action.id))
            console.log('EDIT_USER triggered');
            return {
                ...state,
                editableUser: state.users.find( user => user.id === action.id)
            };
        case 'SAVE_USER':
            console.log('SAVE_USER triggered');
            return {
                ...state,
                users: state.users.map( user => {if (user.id === state.editableUser.id) return state.editableUser}),
                editableUser: null
            }
        default:
            return state;
    }
}

export default users
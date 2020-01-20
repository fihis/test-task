export const editUser = id => ({
    type: 'EDIT_USER',
    id
})

export const saveUser = (id) => ({
    type: 'SAVE_USER',
    id
})


export const closeDetails = () => ({
    type: 'CLOSE_DETAILS'
})

export const changeUserDetails = (target, value) => ({
    type: 'CHANGE_USER_DETAILS',
    target,
    value
})


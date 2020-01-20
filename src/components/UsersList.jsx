import React from 'react';

export const UsersList = ( {users, editUser} ) => {

    const onUserEdit = (event) => {
        editUser(event.target.closest('tr').id)
    }
    
    return (
        <table className='users-list'>
            <thead>
                <tr>
                    <th>E-mail</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Company</th>
                    <th>Country</th>
                    <th>Subscription</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <tr key={user.id} id={user.id} onClick={onUserEdit}>
                        <td>{user.email}</td>
                        <td>
                            <span className='first-name'>{user.firstName} </span>
                            <span className='last-name'>{user.lastName}</span> 
                        </td>
                        <td>{user.type}</td>
                        <td>{user.company}</td>
                        <td>{user.country}</td>
                        <td>{user.subscriptionDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

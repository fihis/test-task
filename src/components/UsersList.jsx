import React from 'react';

export const UsersList = () => {
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
                <tr>
                    <td>user.email</td>
                    <td>user.firstName user.lastName</td>
                    <td>user.type</td>
                    <td>user.company</td>
                    <td>user.country</td>
                    <td>user.subscription</td>
                </tr>
            </tbody>
        </table>
    )
}

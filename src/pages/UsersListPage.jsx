import React from 'react';

import { SideMenu } from '../components/SideMenu'
import { Header } from '../components/Header';

import UserDetailsContainer from '../containers/UserDetailsContainer';
import UsersListContainer from '../containers/UsersListContainer'

export const UsersListPage = ( { editableUser } ) => {
    return (
        <>
            <Header />
            <SideMenu />
            <main>
                <UsersListContainer/>
            </main>
            {(editableUser !== null) && (<UserDetailsContainer/>)}
        </>
    )
}

import React from 'react';

import { SideMenu } from '../components/SideMenu';

import UserDetailsContainer from '../containers/UserDetailsContainer';
import UsersListContainer from '../containers/UsersListContainer';
import HeaderContainer from '../containers/HeaderContainer';

export const UsersListPage = ( { editableUser } ) => {
    return (
        <>
            <HeaderContainer />
            <SideMenu />
            <main>
                <UsersListContainer/>
            </main>
            {(editableUser !== null) && (<UserDetailsContainer/>)}
        </>
    )
}

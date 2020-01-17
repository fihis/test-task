import React from 'react';
import { UsersList } from '../components/UsersList'
import { SideMenu } from '../components/SideMenu'
import { Header } from '../components/Header';
import { Popup } from '../components/Popup';

export const UsersListPage = () => {
    return (
        <>
            <Header />
            <SideMenu />
            <main>
            <UsersList />
            </main>
            <Popup/>
        </>
    )
}

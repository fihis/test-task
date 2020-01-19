import React from 'react';
import { SideMenu } from '../components/SideMenu'
import { Header } from '../components/Header';
import  UserDetailsContainer from '../containers/UserDetailsContainer';
import UsersListContainer from '../containers/UsersListContainer'
import { connect } from 'react-redux';

export const UsersListPage = ( { editableUser } ) => {
    console.log('editable user', editableUser);
    return (
        <>
            <Header />
            <SideMenu />
            <main>
                <UsersListContainer/>
            </main>
            {/* {(editableUser !== null) && (<UserDetailsContainer user={editableUser}/>)} */}
            {(editableUser !== null) && (<UserDetailsContainer/>)}
        </>
    )
}

// const mapStateToProps = state => (
//     state.editableUser
// );

// export default connect(mapStateToProps)(UsersListPage)




import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList';
import { editUser } from '../actions';

// const mapStateToProps = state => (
//     state.users
// );

const mapStateToProps = state => {
    console.log('UsersListContainer', state.users.users)
    return {users: state.users.users}
};


const mapDispatchToProps = dispatch => ({
    editUser: id => dispatch(editUser(id))
})

// функция connect() генерирует Container Component (Filtered Users)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)
import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList';
import { editUser } from '../actions';

const mapStateToProps = state => {
    //return {users: state.users.users}
    return {users: state.users.users.filter(user => Object.values(user).some(key => key.toString().toLowerCase().includes(state.users.filter.toLowerCase())))}
};

const mapDispatchToProps = dispatch => ({
    editUser: id => dispatch(editUser(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)
import { connect } from 'react-redux';
import { saveUser, closeDetails, changeUserDetails } from '../actions';
import { UserDetails } from '../components/UserDetails';

const mapStateToProps = state => {
    return {editableUser: state.users.editableUser}
};


const mapDispatchToProps = dispatch => ({
    saveUser: () => dispatch(saveUser()),
    closeDetails: () => dispatch(closeDetails()),
    changeUserDetails: (target, value) => dispatch(changeUserDetails(target, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetails)
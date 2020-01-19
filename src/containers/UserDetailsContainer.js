import { connect } from 'react-redux';
import { saveUser } from '../actions';
import { UserDetails } from '../components/UserDetails';

const mapStateToProps = state => {
    return {editableUser: state.users.editableUser}
};


const mapDispatchToProps = dispatch => ({
    saveUser: () => dispatch(saveUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetails)
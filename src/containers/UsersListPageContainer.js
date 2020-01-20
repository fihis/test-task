import { connect } from 'react-redux';
import { UsersListPage } from '../pages/UsersListPage';

const mapStateToProps = state => {
    console.log('UsersListPageContainer', state)
    return {editableUser: state.users.editableUser};
};

export default connect(
    mapStateToProps,
    null
)(UsersListPage)
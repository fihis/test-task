import { connect } from 'react-redux';

import { UsersListPage } from '../pages/UsersListPage';

const mapStateToProps = state => {
    return {editableUser: state.users.editableUser};
};

export default connect(
    mapStateToProps,
    null
)(UsersListPage)
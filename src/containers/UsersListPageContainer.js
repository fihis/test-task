import { connect } from 'react-redux';
import { UsersListPage } from '../pages/UsersListPage';
import { editUser } from '../actions';

const mapStateToProps = state => {
    console.log('UsersListPageContainer', state)
    return {editableUser: state.users.editableUser};
};

// const mapDispatchToProps = dispatch => ({
//     dispatch
// })

// const mapDispatchToProps = dispatch => ({
//     editUser: id => dispatch(editUser(id)),
// })
// функция connect() генерирует Container Component (Filtered Users)
export default connect(
    mapStateToProps,
    null
    //mapDispatchToProps
)(UsersListPage)
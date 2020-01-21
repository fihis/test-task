import { connect } from 'react-redux';

import { changeFilter } from '../actions';
import { Header } from '../components/Header';

const mapStateToProps = state => {
    return {filter: state.users.filter}
};

const mapDispatchToProps = dispatch => ({
    changeFilter: (filter) => dispatch(changeFilter(filter)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
import { connect } from 'react-redux';

import { changeFilter, filterTable } from '../actions';
import { Header } from '../components/Header';

const mapStateToProps = state => {
    return {filter: state.users.filter}
};

const mapDispatchToProps = dispatch => ({
    changeFilter: (filter) => dispatch(changeFilter(filter)),
    filterTable: () => dispatch(filterTable())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
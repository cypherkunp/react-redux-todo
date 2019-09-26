import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions';
import Link from '../components/link/link.component';

/*
Describes how to transform the current Redux store state into the props you want to pass
 to a presentational component you are wrapping.
*/
const mapStateToProps = (state, ownProps) => {
    return { active: ownProps.filter === state.visibilityFilter };
};

/*
Receives the dispatch() method and returns callback props that you want to inject into the
 presentational component
*/
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

const LinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default LinkContainer;

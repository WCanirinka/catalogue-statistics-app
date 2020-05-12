import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import CatsList from '../components/CatsList';

const mapStateToProps = (state) => ({ cats: state.cats, filter: state.filter });

const mapDispatchToProps = (dispatch) => ({
  chngFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsList);

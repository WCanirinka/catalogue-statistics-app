import { connect } from 'react-redux';
import { addCat, changeFilter } from '../actions/index';
import App from '../components/App';

const mapStateToProps = (state) => ({
  cats: state.cat,
  filter: state.filter,
  render: state.render,
});

const mapDispatchToProps = (dispatch) => ({
  addNewCat: (cat) => {
    dispatch(addCat(cat));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

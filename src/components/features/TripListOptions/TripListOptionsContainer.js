import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeSearchDuration,
  addTags,
  removeTags,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: (type, value) => {
    console.log('changeSearchDuration', type, value);
    if (type == 'from') {
      dispatch(changeSearchDuration('from', value));
    } else {
      dispatch(changeSearchDuration('to', value));
    }
  },
  addTags: tags => dispatch(addTags(tags)),
  removeTags: tags => dispatch(removeTags(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

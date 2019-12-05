import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { setOrderOption, getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  setOrderOption: setOrderOption(state.order),
});

export default connect(mapStateToProps)(OrderForm);

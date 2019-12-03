import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: setOrderOption(state),
});

export default connect(mapStateToProps)(OrderForm);

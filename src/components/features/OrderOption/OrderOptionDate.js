import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  state = {
    startDate: new Date(),
  };

  changeDate = date => this.props.setOptionValue(date);

  handleChange = date => {
    console.log('date', date.toString());
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker selected={this.state.startDate} onChange={this.changeDate} />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;

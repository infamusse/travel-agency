import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({ name, setOptionValue }) => (
  <input
    onChange={event => setOptionValue(event.currentTarget.value)}
    type="text"
    placeholder={name}
  />
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;

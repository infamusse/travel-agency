import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, options }) => {
  const { order } = options.payload;
  const formatedPrice = formatPrice(tripCost);
  const totalPrice = calculateTotal(formatedPrice, order.options);
  //   console.log('orderSummary/formatPrice', order.options);
  return (
    <div>
      <h2 className={styles.component}>
        Total <strong>{totalPrice}</strong>
      </h2>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  order: PropTypes.object,
};

export default OrderSummary;

import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits, price }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      type="number"
    />
    <span>({formatPrice(price)})</span>
  </div>
);

OrderOptionNumber.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
  currentValue: PropTypes.number,
};

export default OrderOptionNumber;

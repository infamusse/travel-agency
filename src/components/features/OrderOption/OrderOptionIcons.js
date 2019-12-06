import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({ values, setOptionValue, currentValue }) => (
  <div className={styles.icons}>
    {!require ? (
      <div onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'} />
        {'none'}
      </div>
    ) : (
      ''
    )}
    {values.map(({ id, icon, name, price }) => (
      <div
        onClick={() => setOptionValue(id)}
        className={`${styles.icon} ${
          id == currentValue ? styles.iconActive : ''
        }`}
        key={id}
      >
        <p>
          <Icon name={icon}></Icon>
          {name} ({formatPrice(price)})
        </p>
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;

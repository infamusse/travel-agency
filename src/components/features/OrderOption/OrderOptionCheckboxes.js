import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, setOptionValue, currentValue }) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input
          value={value.id}
          checked={
            [currentValue].includes(value.id) ? true : console.log('false')
          }
          type="checkbox"
          onChange={event =>
            setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked)
            )
          }
        />
        <span>
          {value.name}
          {value.pirce}
        </span>
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  setOrderOption: PropTypes.object,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;

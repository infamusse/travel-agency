import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import styles from './OrderForm.scss';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  // console.log('OrderFromTHIS', tripCost);
  // setOrderOption={setOrderOption}
  return (
    <Row>
      {pricing.map(option => {
        // const option = options.map(option => option.id);
        return (
          <Col className={styles.component} key={option.id} md={4}>
            <OrderOption
              setOrderOption={setOrderOption}
              currentValue={options[option.id]}
              {...option}
            />
          </Col>
        );
      })}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;

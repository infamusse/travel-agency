import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  // console.log('OrderFromTHIS', tripCost);
  console.log('options', setOrderOption);
  // setOrderOption={setOrderOption}
  return (
    <Row>
      {pricing.map((options, setOrderOption) => {
        // const option = options.map(option => option.id);
        console.log('options in map', setOrderOption);
        return (
          <Col key={options.id} md={4}>
            <OrderOption
              setOrderOption={setOrderOption}
              id={options.id}
              {...options}
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
  setOrderOption: PropTypes.object,
};

export default OrderForm;

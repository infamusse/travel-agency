import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import styles from './OrderForm.scss';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripId, tripName, tripCost) => {
  const { name, contact } = options;

  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    tripId,
    tripName,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (name != '' && contact != '') {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response) {
        return response.json();
      })
      .then(function(parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Uzupełnij pola imię i kontakt!');
  }
};

const OrderForm = ({ tripCost, tripId, tripName, options, setOrderOption }) => {
  console.log('OrderFromTHIS', tripId, tripName);
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
        <Button onClick={() => sendOrder(options, tripId, tripName, tripCost)}>
          Order now!
        </Button>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
};

export default OrderForm;

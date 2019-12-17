import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }
  render() {
    const remainingTime = this.getCountdownTime();
    // console.log('remainingTime', remainingTime);
    if (remainingTime > 82800) {
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
          <p className={styles.promoDescription}>{this.props.promo}</p>
        </div>
      );
    } else {
      return (
        <div className={styles.component}>
          <h3 className={'title'}>{this.props.title}</h3>
          <p className={'promoDescription'}>{this.getCountdownTime()}</p>
        </div>
      );
    }
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promo: PropTypes.string,
};

export default HappyHourAd;

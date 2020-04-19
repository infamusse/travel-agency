import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHours from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/daysToSummer';

const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }) => {
  const today = new Date();

  return (
    <div
      {...otherProps}
      className={
        styles.component +
        variant
          .split(' ')
          .map((name) => ' ' + (styles[name] || name))
          .join('')
      }
    >
      <div className={styles.daysToSummer}>
        <DaysToSummer today={today} />
      </div>
      <h2 className={styles.title}>{titleText}</h2>
      <img className={styles.image} src={imageSrc} />
      <div className={styles.happyHour}>
        <HappyHours title={'happy hours'} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default Hero;

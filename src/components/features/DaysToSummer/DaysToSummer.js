import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  daysToSummer = () => {
    const year = new Date().getUTCFullYear();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    //Feb is 0, july and because of that, july is 5
    const summerStart = new Date(year, 5, 21);
    const today = this.props.today;

    const diffDays = Math.round(Math.abs((summerStart - today) / oneDay));
    console.log('diffDays', diffDays);
    return diffDays;
  };

  getDate = () => {
    const date = this.props.today;
    // Feb is on 0 place
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const dateArray = [day, month];
    return dateArray;
  };

  isSummer = (array) => {
    const [day, month] = array;
    let summer = false;
    if (month >= 6 || month <= 9) {
      switch (month) {
        case 6:
          if (day >= 21) {
            summer = true;
            console.log('month', day >= 21);
          }
          break;
        case 9:
          if (day <= 23) {
            summer = true;
          }
          break;
        case 7:
        case 8:
          summer = true;
      }
    }
    return summer;
  };

  render() {
    return (
      <div className={styles.summerCounterContainer}>
        <p className={styles.summerCounter}>
          {this.isSummer(this.getDate())
            ? "It's summer"
            : `Days to summer: ${this.daysToSummer()}`}
        </p>
      </div>
    );
  }
}

export default DaysToSummer;

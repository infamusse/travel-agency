//HH MM SS

export const addZero = time => {
  if (time >= 10) {
    return time;
  }
  return `0${time}`;
};

export const formatTime = remainingTime => {
  if (typeof remainingTime != 'number' || remainingTime < 0) {
    return null;
  }
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime - hours * 3600) / 60);
  const second = remainingTime - hours * 3600 - minutes * 60;

  const hoursFormtted = addZero(hours);
  const minutesFormated = addZero(minutes);
  const secondFormated = addZero(second);

  return `${hoursFormtted}:${minutesFormated}:${secondFormated}`;
};

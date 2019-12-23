import { formatTime, addZero } from './formatTime';

describe('formatTime', () => {
  it('returt null without argument', () => {
    expect(formatTime()).toBe(null);
  });
  it('returt null with argument other than number', () => {
    expect(formatTime('string')).toBe(null);
  });
  it('returt null with argument less than 0', () => {
    expect(formatTime(-1)).toBe(null);
  });
  it('returt right formatted', () => {
    expect(formatTime(1)).toBe('00:00:01');
  });
  it('returt right formatted', () => {
    expect(formatTime(3660)).toBe('01:01:00');
  });
  it('returt right formatted', () => {
    expect(formatTime(0)).toBe('00:00:00');
  });
});

describe('addZero', () => {
  it('shoud add zero', () => {
    expect(addZero(5)).toBe('05');
  });
});

const typeofUndefined = (value) => {
  if (typeof value === 'undefined' || `${value}`.indexOf('NaN') !== -1) {
    return '--';
  }
  return value;
};

export default typeofUndefined;

const addZeroToMinus = (minus) => {
  return parseInt(minus) < 10 ? `0${minus}` : minus;
};

export default addZeroToMinus;

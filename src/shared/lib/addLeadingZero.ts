const addLeadingZero = (val: number) => {
  return val < 10 ? "0" + val : val;
};

export default addLeadingZero;

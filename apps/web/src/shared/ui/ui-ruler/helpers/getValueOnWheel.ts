const getNewValueOnWheel = (delta: number, value: number) => {
  if (delta < 0) return (value * 10 + 1) / 10;

  if (value > 0 && delta > 0) return (value * 10 - 1) / 10;

  return 0;
};

export default getNewValueOnWheel;

const generateNumberList = (from: number, until: number, step = 1) => {
  const list = [];

  for (let i = from; i <= until; i += step) list.push(i);

  return list;
};

export default generateNumberList;

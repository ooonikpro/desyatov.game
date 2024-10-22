export const convertValueFromInput = (value: string) => {
  const dotIndex = value.indexOf(".");
  return dotIndex === -1 ? value : value.substring(0, dotIndex + 3);
};

export const removeZeroAtBegin = (value: string) => {
  if (value[0] === ".") return value;
  const start = value.split("").findIndex((s) => s !== "0");
  const res = value.substring(start);
  return res[0] === '.' || !res ? `0${res}`: res
};

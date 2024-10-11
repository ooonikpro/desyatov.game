const getStyleProperty = (ref: HTMLElement | null, property: string) => {
  if (ref) return parseInt(getComputedStyle(ref).getPropertyValue(property) ?? "0", 10);
  else return 0;
};

export default getStyleProperty;

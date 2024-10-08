const getStyleProperty = (ref: HTMLElement | null, property: string) =>
  parseInt(ref?.style.getPropertyValue(property) ?? "0", 10);

export default getStyleProperty;

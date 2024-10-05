export type UiRulerPropsType = {
  onChange: (newValue: number) => void;
  value: number;
  measurement: string;
}

export type RouletteItemType = {
  value: number,
  type: 'int' | 'float',
}

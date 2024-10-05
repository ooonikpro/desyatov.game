export type UiRulerPropsType = {
  onChange: (newValue: number) => void;
  value: number;
  measurement: string;
  gap?: number;
};

export type RouletteItemType = {
  value: number;
  type: "int" | "float";
};

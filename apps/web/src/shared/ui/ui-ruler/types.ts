export type UiRulerPropsType = {
  onChange: (newValue: number) => void;
  value: number;
  measurement: string;
};

export type RulerRoulettePropsType = Omit<UiRulerPropsType, 'measurement'>;

export type RouletteItemType = {
  value: number;
  type: "int" | "float";
};

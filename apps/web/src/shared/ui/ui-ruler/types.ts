export type UiRulerPropsType = {
  onChange: (newValue: number) => void;
  value: number;
  measurement: string;
  direction?: DirectionType;
};

export type DirectionType = "vertical" | "horizontal";

export type RulerRoulettePropsType = Omit<UiRulerPropsType, "measurement">;

export type RouletteItemType = {
  value: number;
  type: "int" | "float";
  direction: DirectionType;
}

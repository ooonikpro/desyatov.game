import { UiScreenProps } from "./types";
import s from "./UiScreen.module.scss";

const UiScreen = ({ children }: UiScreenProps) => {
  return (
    <div className={s.root}>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default UiScreen;

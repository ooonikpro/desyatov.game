import UiProgressBar from "@shared/ui/ui-progress-bar";
import s from "./CaloriesEaten.module.scss";

const CaloriesEaten = () => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>
        Калорий <br /> съедено <br /> <b>сегодня</b>
      </h4>
      <div className={s.chart}>
        <div className={s.bar}>
          <span className={s.barLabel}>Б</span>
          <UiProgressBar
            isVertical
            size="xs"
            value={26}
            className={s.progress}
          />
          <span className={s.barValue}>26</span>
        </div>
        <div className={s.bar}>
          <span className={s.barLabel}>Ж</span>
          <UiProgressBar
            isVertical
            size="xs"
            value={37}
            className={s.progress}
          />
          <span className={s.barValue}>37</span>
        </div>
        <div className={s.bar}>
          <span className={s.barLabel}>У</span>
          <UiProgressBar
            isVertical
            size="xs"
            value={37}
            className={s.progress}
          />
          <span className={s.barValue}>37</span>
        </div>
      </div>
      <div className={s.value}>1020</div>
    </div>
  );
};

export default CaloriesEaten;

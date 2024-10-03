import s from "./CaloriesRecommended.module.scss";

const CaloriesRecommended = () => {
  return (
    <div className={s.root}>
      <h3 className={s.title}>Рекомендуемая норма калорий</h3>
      <div className={s.icon}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63628 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63628 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21.3334V16.0001M16 10.6667H16.0133"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={s.subtitle}>для достижения желаемого веса</span>
      <div className={s.details}>
        <span className={s.total}>3600</span>
        <div className={s.groups}>
          <div className={s.group}>
            <span className={s.groupName}>Б</span>
            <span className={s.groupValue}>36%</span>
          </div>
          <div className={s.group}>
            <span className={s.groupName}>Ж</span>
            <span className={s.groupValue}>28%</span>
          </div>
          <div className={s.group}>
            <span className={s.groupName}>У</span>
            <span className={s.groupValue}>36%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesRecommended;

import s from "@entities/gym/ui/gym-daily-exercises/GymDailyExercises.module.scss";

const GymWeeklyExercises = () => {
  return (
    <div className={s.root}>
      <h4 className={s.title}>
        Выполнено тренировок за&nbsp;<b>неделю</b>
      </h4>
      <div className={s.icon}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.6217 17.1638C30.3989 19.9628 29.3773 22.6391 27.6783 24.8746C25.9792 27.1101 23.674 28.8109 21.0367 29.775C18.3994 30.7391 15.5407 30.9259 12.8003 30.3132C10.0599 29.7005 7.55302 28.3141 5.57744 26.3187C3.60186 24.3233 2.24063 21.8028 1.65548 19.0566C1.07034 16.3103 1.28586 13.4539 2.27646 10.8265C3.26706 8.1992 4.99109 5.91141 7.24372 4.23499C9.49635 2.55857 12.1829 1.56398 14.9842 1.36938"
            stroke="currentColor"
            strokeWidth="1.71429"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.2958 18.4589C21.8883 19.5077 21.2258 20.4383 20.3682 21.1667C19.5106 21.895 18.485 22.3982 17.3841 22.6306C16.2832 22.863 15.1417 22.8173 14.0628 22.4977C12.984 22.1781 12.0019 21.5947 11.2052 20.8001C10.4086 20.0056 9.82254 19.025 9.50014 17.947C9.17774 16.8691 9.12914 15.7278 9.35872 14.6264C9.5883 13.5249 10.0888 12.4981 10.815 11.6387C11.5413 10.7793 12.4702 10.1144 13.518 9.70429M16.0001 15.9995L21.6414 10.3586M21.6414 10.3586L26.1544 11.4868L30.6674 6.97412L26.1544 5.84594L25.0261 1.33325L20.5131 5.84594L21.6414 10.3586Z"
            stroke="currentColor"
            strokeWidth="1.71429"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={s.value}>0 / 3</div>
    </div>
  );
};

export default GymWeeklyExercises;

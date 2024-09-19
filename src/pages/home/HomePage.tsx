import GymDailyChallenge from "@entities/gym/ui/gym-daily-challenge";
import GymDayBlock from "@entities/gym/ui/gym-day-block";
import UiButton from "@shared/ui/ui-button";

import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.root}>
      <GymDailyChallenge
        title="Планка"
        actionButton={
          <UiButton theme="black" size="m" block>
            Принять
          </UiButton>
        }
        duration="1мин"
      />

      <GymDayBlock
        title="Тренировочный день 1"
        description="Комплекс упражнений на грудь"
        actionButton={
          <UiButton theme="primary" size="m" block>
            Открыть
          </UiButton>
        }
      />

      <GymDayBlock
        title="Тренировочный день 2"
        description="Комплекс упражнений на ноги"
        actionButton={
          <UiButton theme="primary" size="m" block>
            Открыть
          </UiButton>
        }
      />

      <GymDayBlock
        title="Тренировочный день 3"
        description="Комплекс упражнений на спину"
        actionButton={
          <UiButton theme="primary" size="m" block>
            Открыть
          </UiButton>
        }
      />
    </div>
  );
};

export default HomePage;

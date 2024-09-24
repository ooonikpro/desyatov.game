import GymDailyChallenge from "@entities/gym/ui/gym-daily-challenge";
import GymDailyExercises from "@entities/gym/ui/gym-daily-result";
import GymDayBlock from "@entities/gym/ui/gym-day-block";
import GymWeeklyResult from "@entities/gym/ui/gym-weekly-result";
import UiButton from "@shared/ui/ui-button";

import UiGrid from "@shared/ui/ui-grid";

const HomePage = () => {
  return (
    <UiGrid.Container>
      <UiGrid.Column100>
        <GymDailyChallenge
          title="Планка"
          actionButton={(cb) => (
            <UiButton theme="black" size="m" block onClick={cb}>
              Принять
            </UiButton>
          )}
          duration="1мин"
        />
      </UiGrid.Column100>

      <UiGrid.Column50>
        <GymDailyExercises />
      </UiGrid.Column50>

      <UiGrid.Column50>
        <GymWeeklyResult />
      </UiGrid.Column50>

      <UiGrid.Column100>
        <GymDayBlock
          title="Тренировочный день 1"
          description="Комплекс упражнений на грудь"
          actionButton={(cb) => (
            <UiButton theme="primary" size="m" block onClick={cb}>
              Открыть
            </UiButton>
          )}
        />
      </UiGrid.Column100>

      <UiGrid.Column100>
        <GymDayBlock
          title="Тренировочный день 2"
          description="Комплекс упражнений на ноги"
          actionButton={(cb) => (
            <UiButton theme="primary" size="m" block onClick={cb}>
              Открыть
            </UiButton>
          )}
        />
      </UiGrid.Column100>

      <UiGrid.Column100>
        <GymDayBlock
          title="Тренировочный день 3"
          description="Комплекс упражнений на спину"
          actionButton={(cb) => (
            <UiButton theme="primary" size="m" block onClick={cb}>
              Открыть
            </UiButton>
          )}
        />
      </UiGrid.Column100>
    </UiGrid.Container>
  );
};

export default HomePage;

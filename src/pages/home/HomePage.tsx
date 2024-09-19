import GymDailyChallenge from "@entities/gym/ui/gym-daily-challenge";
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
    </div>
  );
};

export default HomePage;

import CaloriesBurned from "@entities/calories/ui/calories-burned";
import CaloriesEaten from "@entities/calories/ui/calories-eaten";
import CaloriesRecommended from "@entities/calories/ui/calories-recommended";

import s from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  return (
    <div className={s.root}>
      <CaloriesRecommended />
      <CaloriesEaten />
      <CaloriesBurned />
    </div>
  );
};

export default StatisticsPage;

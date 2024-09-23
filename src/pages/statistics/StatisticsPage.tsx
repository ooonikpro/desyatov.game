import RecommendedCaloriesWidget from "@widgets/recommended-calories-widget";

import s from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  return (
    <div className={s.root}>
      <RecommendedCaloriesWidget />
    </div>
  );
};

export default StatisticsPage;

import CaloriesBurned from "@entities/calories/ui/calories-burned";
import CaloriesEaten from "@entities/calories/ui/calories-eaten";
import CaloriesRecommended from "@entities/calories/ui/calories-recommended";

import UiGrid from "@shared/ui/ui-grid";

const StatisticsPage = () => {
  return (
    <UiGrid.Container>
      <UiGrid.Column100>
        <CaloriesRecommended />
      </UiGrid.Column100>

      <UiGrid.Column50>
        <CaloriesEaten />
      </UiGrid.Column50>

      <UiGrid.Column50>
        <CaloriesBurned />
      </UiGrid.Column50>
    </UiGrid.Container>
  );
};

export default StatisticsPage;

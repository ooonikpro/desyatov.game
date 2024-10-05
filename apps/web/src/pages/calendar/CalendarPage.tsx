import UiGrid from "@shared/ui/ui-grid";
import UiRuler from "@shared/ui/ui-ruler";
import { useState } from "react";

const CalendarPage = () => {
  const [weight, setWeight] = useState(0);

  return (
    <UiGrid.Container>
      {/* Calendar */}
      <UiGrid.Column100>
        <UiRuler measurement="kg" onChange={setWeight} value={weight} />
      </UiGrid.Column100>
    </UiGrid.Container>
  );
};

export default CalendarPage;

import React from "react";

import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import useRouteName from "@shared/hooks/useRouteName";
import UiConditionalRender from "@shared/ui/ui-conditional-render/UiConditionalRender";

const AppRouteName = ({
  component,
  name,
}: {
  component: React.ReactElement;
  name: RoutesNamesEnum;
}) => {
  const routeName = useRouteName();

  return (
    <UiConditionalRender condition={routeName === name}>
      {component}
    </UiConditionalRender>
  );
}

export default AppRouteName;

import React from "react";
import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import useRouteName from "@shared/hooks/useRouteName";
import UiConditionalRender from "@shared/ui/ui-conditional-render";

const ShowIntroOrMain = ({ intro, children }: { intro: React.ReactNode; children: React.ReactNode }) => {
  const isShow = useRouteName() === RoutesNamesEnum.intro;

  return (
    <UiConditionalRender condition={isShow} other={children}>
      {intro}
    </UiConditionalRender>
  );
};

export default ShowIntroOrMain;

import React, { useState } from "react";
import RoutesNamesEnum from "@shared/constants/routesNamesEnum";
import useRouteName from "@shared/hooks/useRouteName";
import UiConditionalRender from "@shared/ui/ui-conditional-render";

const ShowIntroOrMain = ({
  intro,
  children,
}: {
  // eslint-disable-next-line no-unused-vars
  intro: (onTransitionEnd: () => void) => React.ReactNode;
  children: React.ReactNode;
}) => {
  const isIntroRouteName = useRouteName() === RoutesNamesEnum.intro;

  const [isShowIntro, setIsShowIntro] = useState(isIntroRouteName);

  const onTransitionEnd = () => setIsShowIntro(false);

  return (
    <UiConditionalRender condition={isIntroRouteName || isShowIntro} other={children}>
      {intro(onTransitionEnd)}
    </UiConditionalRender>
  );
};

export default ShowIntroOrMain;

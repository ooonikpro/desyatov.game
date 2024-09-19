import cn from "classnames";
import { useEffect, useMemo, useState } from "react";
import InterviewStepActivityPage from "@pages/interview/steps/activity";
import InterviewStepAgePage from "@pages/interview/steps/age";
import InterviewStepCurrentWeightPage from "@pages/interview/steps/current-weight";
import InterviewStepDesiredWeightPage from "@pages/interview/steps/desired-weight";
import InterviewStepGenderPage from "@pages/interview/steps/gender";
import InterviewStepHeightPage from "@pages/interview/steps/height";
import InterviewStepIntroPage from "@pages/interview/steps/intro";
import { InterviewBackButton, InterviewNextButton } from "@features/interview";
import interviewModel from "@entities/interview/model";
import InterviewProgress from "@entities/interview/ui/interview-progress";
import InterviewStepProvider from "@entities/interview/ui/interview-step-provider";

import s from "./InterviewPage.module.scss";

const InterviewPage = ({ onTransitionEnd }: { onTransitionEnd: () => void }) => {
  const [isShow, setIsShow] = useState(false);

  const startAnimation = () => {
    setIsShow(false);
  };

  const handleTransitionEnd = () => {
    if (isShow) return;

    interviewModel.hide();
    onTransitionEnd();
  };

  useMemo(() => {
    interviewModel.setPageComponents([
      InterviewStepIntroPage,
      InterviewStepAgePage,
      InterviewStepGenderPage,
      InterviewStepHeightPage,
      InterviewStepCurrentWeightPage,
      InterviewStepDesiredWeightPage,
      InterviewStepActivityPage,
    ]);
  }, []);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className={cn(s.root, { [s.show]: isShow })} onTransitionEnd={handleTransitionEnd}>
      <InterviewStepProvider
        progress={<InterviewProgress key="progress" />}
        secondaryAction={<InterviewBackButton onFirstStepClick={startAnimation} />}
        primaryAction={<InterviewNextButton onFinalStepClick={startAnimation} />}
      />
    </div>
  );
};

export default InterviewPage;

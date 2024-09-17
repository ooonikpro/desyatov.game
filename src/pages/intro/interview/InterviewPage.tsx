import cn from "classnames";
import { useEffect, useState } from "react";
import InterviewStepActivityPage from "@pages/intro/interview/step-activity";
import InterviewPrimaryButton from "@features/interview-primary-button";
import InterviewSecondaryButton from "@features/interview-secondary-button";
import interviewModel from "@entities/interview/model";
import InterviewProgress from "@entities/interview/ui/interview-progress";
import InterviewStepProvider from "@entities/interview/ui/interview-step-provider";
import s from "./InterviewPage.module.scss";
import InterviewStepAgePage from "./step-age";
import InterviewStepCurrentWeightPage from "./step-current-weight";
import InterviewStepDesiredWeightPage from "./step-desired-weight";
import InterviewStepGenderPage from "./step-gender";
import InterviewStepHeightPage from "./step-height";
import InterviewStepZeroPage from "./step-zero";

interviewModel.setPageComponents([
  InterviewStepZeroPage,
  InterviewStepAgePage,
  InterviewStepGenderPage,
  InterviewStepHeightPage,
  InterviewStepCurrentWeightPage,
  InterviewStepDesiredWeightPage,
  InterviewStepActivityPage,
]);

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

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className={cn(s.root, { [s.show]: isShow })} onTransitionEnd={handleTransitionEnd}>
      <InterviewStepProvider
        progress={<InterviewProgress key="progress" />}
        secondaryAction={<InterviewSecondaryButton onFirstStepClick={startAnimation} />}
        primaryAction={<InterviewPrimaryButton onFinalStepClick={startAnimation} />}
      />
    </div>
  );
};

export default InterviewPage;

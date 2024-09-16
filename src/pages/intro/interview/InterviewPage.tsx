import cn from "classnames";
import { useEffect, useState } from "react";
import InterviewPrimaryButton from "@features/interview-primary-button";
import InterviewSecondaryButton from "@features/interview-secondary-button";
import interviewModel from "@entities/interview/model";
import InterviewStepProvider from "@entities/interview/ui/interview-step-provider";
import s from "./InterviewPage.module.scss";
import InterviewStepZeroPage from "./step-zero";

interviewModel.setPageComponents([InterviewStepZeroPage]);

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
        secondaryAction={<InterviewSecondaryButton onFirstStepClick={startAnimation} />}
        primaryAction={<InterviewPrimaryButton onFinalStepClick={startAnimation} />}
      />
    </div>
  );
};

export default InterviewPage;

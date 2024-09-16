import UiProgressBar from "@shared/ui/ui-progress-bar";
import s from "./InterviewProgress.module.scss";

const InterviewProgress = ({ step, totalStep }: { step: number; totalStep: number }) => {
  return (
    <div className={s.root}>
      <span className={s.label}>
        Вопрос {step} из {totalStep}
      </span>
      <UiProgressBar size="m" value={0} />
    </div>
  );
};

export default InterviewProgress;

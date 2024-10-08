import interviewModel from "@entities/interview/model";
import UiProgressBar from "@shared/ui/ui-progress-bar";
import s from "./InterviewProgress.module.scss";

const InterviewProgress = () => {
  const step = interviewModel.use("step");
  const totalSteps = interviewModel.use("pageComponents").length - 1;

  const value = (step / totalSteps) * 100;

  if (step === 0) return null;

  return (
    <div className={s.root}>
      <span className={s.label}>
        Вопрос {step} из {totalSteps}
      </span>
      <UiProgressBar size="m" value={value} />
    </div>
  );
};

export default InterviewProgress;

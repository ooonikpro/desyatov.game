import interviewModel from "@entities/interview/model";
import useRouteNavigation from "@shared/hooks/useRouteNavigation";
import UiButton from "@shared/ui/ui-button";

const InterviewBackButton = ({ onFinalStepClick }: { onFinalStepClick: () => void }) => {
  let text = "Продолжить";

  const step = interviewModel.use("step");
  const totalSteps = interviewModel.get("pageComponents").length - 1;
  const isFinalStep = step === totalSteps;

  const router = useRouteNavigation();

  if (step === 0) text = "Пройти опрос";
  if (isFinalStep) text = "Завершить";

  const handleClick = () => {
    if (isFinalStep) {
      router.navigateToHome();
      onFinalStepClick();
    } else interviewModel.nextStep();
  };

  return <UiButton onClick={handleClick}>{text}</UiButton>;
};

export default InterviewBackButton;

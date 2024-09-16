import interviewModel from "@entities/interview/model";
import useRouteNavigation from "@shared/hooks/useRouteNavigation";
import UiButton from "@shared/ui/ui-button";

const InterviewSecondaryButton = ({ onFirstStepClick }: { onFirstStepClick: () => void }) => {
  let text = "Продолжить";

  const step = interviewModel.use("step");
  const isFirstStep = step === 0;

  const router = useRouteNavigation();

  if (step === 0) text = "Пропустить";
  if (step > 0) text = "Назад";

  const handleClick = () => {
    if (isFirstStep) {
      router.navigateToHome();
      onFirstStepClick();
    } else interviewModel.prevStep();
  };

  return (
    <UiButton theme="link" onClick={handleClick}>
      {text}
    </UiButton>
  );
};

export default InterviewSecondaryButton;

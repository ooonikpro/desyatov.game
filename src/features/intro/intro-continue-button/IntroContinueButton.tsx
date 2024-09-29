import interviewModel from "@entities/interview/model";
import UiButton from "@shared/ui/ui-button";

 
const IntroContinueButton = ({ beforeClick }: { beforeClick: () => void }) => {
  const handleClick = async () => {
    beforeClick();
    interviewModel.show();
  };

  return (
    <UiButton theme="primary" onClick={handleClick} block>
      Начать
    </UiButton>
  );
};

export default IntroContinueButton;

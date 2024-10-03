import useMount from "react-use/lib/useMount";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import { weightList } from "@entities/interview/constants/weight";
import interviewModel from "@entities/interview/model";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewDesiredWeightControl = ({
  id = AnswerKeyEnum.desiredWeight,
  currentWeightId = AnswerKeyEnum.currentWeight,
}: {
  id?: AnswerKeyEnum;
  currentWeightId?: AnswerKeyEnum;
}) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useMount(() => {
    interviewModel.setAnswer(id, answers[currentWeightId]);
  });

  return (
    <UiMobileSelect
      label="кг"
      options={weightList.map(String)}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InterviewDesiredWeightControl;

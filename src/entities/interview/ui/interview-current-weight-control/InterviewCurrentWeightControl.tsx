import useMount from "react-use/lib/useMount";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import { defaultWeightForMan, defaultWeightForWoman, weightList } from "@entities/interview/constants/weight";
import interviewModel from "@entities/interview/model";
import GenderEnum from "@shared/constants/genderEnum";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewCurrentWeightControl = ({
  id = AnswerKeyEnum.currentWeight,
  genderId = AnswerKeyEnum.gender,
}: {
  id?: AnswerKeyEnum;
  genderId?: AnswerKeyEnum;
}) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useMount(() => {
    if (!value) {
      const gender = answers[genderId];
      const isMan = gender === GenderEnum.man;

      interviewModel.setAnswer(id, isMan ? defaultWeightForMan : defaultWeightForWoman);
    }
  });

  return <UiMobileSelect label="кг" options={weightList.map(String)} value={value} onChange={handleChange} />;
};

export default InterviewCurrentWeightControl;

import { useEffect } from "react";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import { weightList } from "@entities/interview/constants/weight";
import interviewModel from "@entities/interview/model";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewDesiredWeightControl = ({
  id = AnswerKeyEnum.desiredWeight,
  currentWeightId = AnswerKeyEnum.currentWeight,
}) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useEffect(() => {
    interviewModel.setAnswer(id, answers[currentWeightId]);
  }, []);

  return <UiMobileSelect label="кг" options={weightList.map(String)} value={value} onChange={handleChange} />;
};

export default InterviewDesiredWeightControl;

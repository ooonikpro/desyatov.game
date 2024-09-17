import { useEffect } from "react";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum.ts";
import { defaultHeightForMan, defaultHeightForWoman, heightList } from "@entities/interview/constants/height.ts";
import interviewModel from "@entities/interview/model";
import GenderEnum from "@shared/constants/genderEnum.ts";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewHeightControl = ({ id = AnswerKeyEnum.height, genderId = AnswerKeyEnum.gender }) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useEffect(() => {
    if (!value) {
      const gender = answers[genderId];
      const isMan = gender === GenderEnum.man;

      interviewModel.setAnswer(id, isMan ? defaultHeightForMan : defaultHeightForWoman);
    }
  }, []);

  return <UiMobileSelect label="см" options={heightList.map(String)} value={value} onChange={handleChange} />;
};

export default InterviewHeightControl;

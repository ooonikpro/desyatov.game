import { useEffect } from "react";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum.ts";
import { defaultYear, yearsList } from "@entities/interview/constants/years";
import interviewModel from "@entities/interview/model";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewYearControl = ({ id = AnswerKeyEnum.year }) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useEffect(() => {
    if (!value) interviewModel.setAnswer(id, defaultYear);
  }, []);

  return <UiMobileSelect label="лет" options={yearsList.map(String)} value={value} onChange={handleChange} />;
};

export default InterviewYearControl;

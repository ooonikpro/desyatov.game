import useMount from "react-use/lib/useMount";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import { defaultYear, yearsList } from "@entities/interview/constants/years";
import interviewModel from "@entities/interview/model";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewYearControl = ({
  id = AnswerKeyEnum.year,
}: {
  id?: AnswerKeyEnum;
}) => {
  const answers = interviewModel.use("answers");
  const value = answers[id]?.toString();

  const handleChange = (val: string) => {
    interviewModel.setAnswer(id, Number(val));
  };

  useMount(() => {
    if (!value) interviewModel.setAnswer(id, defaultYear);
  });

  return (
    <UiMobileSelect
      label="лет"
      options={yearsList.map(String)}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InterviewYearControl;

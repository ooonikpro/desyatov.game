import useMount from "react-use/lib/useMount";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import {
  defaultHeightForMan,
  defaultHeightForWoman,
  heightList,
} from "@entities/interview/constants/height";
import interviewModel from "@entities/interview/model";
import GenderEnum from "@shared/constants/genderEnum";
import UiMobileSelect from "@shared/ui/ui-mobile-select";

const InterviewHeightControl = ({
  id = AnswerKeyEnum.height,
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

      interviewModel.setAnswer(
        id,
        isMan ? defaultHeightForMan : defaultHeightForWoman,
      );
    }
  });

  return (
    <UiMobileSelect
      label="см"
      options={heightList.map(String)}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InterviewHeightControl;

import cn from "classnames";
import { useEffect } from "react";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";
import { genderList } from "@entities/interview/constants/gender";
import interviewModel from "@entities/interview/model";

import TelegramApi from "@shared/api/telegram";
import GenderEnum from "@shared/constants/genderEnum";
import s from "./InterviewGenderControl.module.scss";

const InterviewGenderControl = ({
  id = AnswerKeyEnum.gender,
  defaultValue = GenderEnum.man,
}: {
  id?: string;
  defaultValue?: GenderEnum;
}) => {
  const answers = interviewModel.use("answers");

  const handleClick = (val: any) => {
    TelegramApi.vibrate();
    interviewModel.setAnswer(id, val);
  };

  const isActive = (val: any) => answers[id] === val;

  useEffect(() => {
    if (!answers[id]) interviewModel.setAnswer(id, defaultValue);
  }, []);

  return (
    <div className={s.root}>
      {genderList.map((option) => (
        <span
          className={cn(s.option, { [s.active]: isActive(option.value) })}
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </span>
      ))}
    </div>
  );
};

export default InterviewGenderControl;

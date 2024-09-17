import cn from "classnames";
import { useEffect } from "react";
import { ActivityEnum, activityList, defaultActivity } from "@entities/interview/constants/activity.ts";
import AnswerKeyEnum from "@entities/interview/constants/answerKeyEnum";

import interviewModel from "@entities/interview/model";
import TelegramApi from "@shared/api/telegram";
import s from "./InterviewActivity.module.scss";

const InterviewActivityControl = ({ id = AnswerKeyEnum.activity }) => {
  const answers = interviewModel.use("answers");
  const value = answers[id];

  const handleClick = (val: ActivityEnum) => {
    TelegramApi.vibrate();
    interviewModel.setAnswer(id, val);
  };

  useEffect(() => {
    if (!value) interviewModel.setAnswer(id, defaultActivity);
  }, []);

  return (
    <div className={s.root}>
      {activityList.map((option) => (
        <div
          className={cn(s.option, { [s.active]: option.value === value })}
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          <h4 className={s.title}>{option.title}</h4>
          <p className={s.text}>{option.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InterviewActivityControl;

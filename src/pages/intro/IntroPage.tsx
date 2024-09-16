import cn from "classnames";
import React, { useState } from "react";
import IntroContinueButton from "@features/intro-continue-button";
import InterviewIsShowProvider from "@entities/interview/ui/interview-is-show-provider";

import UiConditionalRender from "@shared/ui/ui-conditional-render";
import UiVideoBg from "@shared/ui/ui-video-bg";
import s from "./IntroPage.module.scss";

const IntroPage = ({ interviewPage }: { interviewPage: React.ReactNode }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const runAnimation = () => setIsAnimated(true);

  return (
    <>
      <UiConditionalRender condition={isShow}>
        <div className={cn(s.root, { [s.animated]: isAnimated })} onTransitionEnd={() => setIsShow(false)}>
          <UiVideoBg src="assets/videos/intro.mp4" className={s.video} />

          <div className={s.content}>
            <h2 className={s.title}>
              Сделай свое тело здоровым и <span className={s.primary}>сильным</span>
            </h2>
            <p className={s.text}>
              спорт — это вид физической активности, направленный на развитие физических способностей и навыков.
            </p>
            <IntroContinueButton beforeClick={runAnimation} />
          </div>
        </div>
      </UiConditionalRender>

      <InterviewIsShowProvider>{interviewPage}</InterviewIsShowProvider>
    </>
  );
};

export default IntroPage;

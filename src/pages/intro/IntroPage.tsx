import cn from "classnames";
import { useRef, useState } from "react";
import IntroContinueButton from "@features/intro-continue-button";
import { UiVideoBg } from "@shared/ui";
import s from "./IntroPage.module.scss";

const IntroPage = () => {
  const promise = useRef(() => {});

  const [isAnimated, setIsAnimated] = useState(false);

  const runAnimation: () => Promise<void> = () => {
    return new Promise<void>((res) => {
      setIsAnimated(true);
      promise.current = res;
    });
  };

  return (
    <div className={cn(s.root, { [s.animated]: isAnimated })} onTransitionEnd={() => promise.current()}>
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
  );
};

export default IntroPage;

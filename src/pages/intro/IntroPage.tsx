import IntroContinueButton from "@features/intro-continue-button";
import { UiScreen, UiVideoBg } from "@shared/ui";
import s from "./IntroPage.module.scss";

const IntroPage = () => {
  return (
    <UiScreen>
      <div className={s.root}>
        <UiVideoBg
          src="https://api.telegram.org/file/bot7003848215:AAFBvbnDo68u4IsZoiUUlZlaWZt3lk_4534/documents/file_2.webm"
          className={s.video}
        />

        <div className={s.content}>
          <h2 className={s.title}>
            Сделай свое тело здоровым и <span className={s.primary}>сильным</span>
          </h2>
          <p className={s.text}>
            спорт — это вид физической активности, направленный на развитие физических способностей и навыков.
          </p>
          <IntroContinueButton />
        </div>
      </div>
    </UiScreen>
  );
};

export default IntroPage;

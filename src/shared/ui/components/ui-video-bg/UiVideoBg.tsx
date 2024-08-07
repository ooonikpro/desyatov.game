// eslint-disable-next-line import/no-extraneous-dependencies
import cn from "classnames";
import { UiVideoBgProps } from "./types";

import s from "./UiVideoBg.module.scss";

const UiVideoBg = ({ src, ...$attrs }: UiVideoBgProps) => {
  return (
    <div {...$attrs} className={cn(s.root, $attrs.className)}>
      <video preload="auto" muted playsInline autoPlay loop src={src} controls={false} className={s.video}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default UiVideoBg;

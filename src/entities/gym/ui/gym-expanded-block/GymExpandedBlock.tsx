import cn from "classnames";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import UiConditionalRender from "@shared/ui/ui-conditional-render";

import s from "./GymExpandedBlock.module.scss";
import { GymExpandedBlockPropsType, GymExpandedBlockRefType } from "./types";

const animationDuration = 150;

const GymExpandedBlock = (
  { color = "secondary", classes = {}, titleNode, iconNode, textNode, children, actionNode }: GymExpandedBlockPropsType,
  ref: GymExpandedBlockRefType,
) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rootState = useRef<{ width: number; height: number; top: number; left: number; borderRadius: string } | null>();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowPlaylist, setIsShowPlaylist] = useState(false);

  const open = () => {
    if (!isExpanded && rootRef.current && contentRef.current) {
      const { width, height, top, left } = contentRef.current.getBoundingClientRect();

      if (!rootState.current) {
        rootState.current = {
          width,
          height,
          top,
          left,
          borderRadius: contentRef.current.style.borderRadius,
        };
      }

      rootRef.current.style.width = width + "px";
      rootRef.current.style.height = height + "px";

      contentRef.current.style.width = width + "px";
      contentRef.current.style.height = height + "px";
      contentRef.current.style.top = top + "px";
      contentRef.current.style.left = left + "px";

      setIsExpanded(true);

      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.width = "100%";
          contentRef.current.style.height = "100%";
          contentRef.current.style.top = "0";
          contentRef.current.style.left = "0";
          contentRef.current.style.borderRadius = "0";
        }

        setIsShowPlaylist(true);
      });
    }
  };
  const close = () => {
    if (isExpanded && rootRef.current && contentRef.current && rootState.current) {
      setIsShowPlaylist(false);
      contentRef.current.style.width = rootState.current.width + "px";
      contentRef.current.style.height = rootState.current.height + "px";
      contentRef.current.style.top = rootState.current.top + "px";
      contentRef.current.style.left = rootState.current.left + "px";
      contentRef.current.style.borderRadius = rootState.current.borderRadius;

      setTimeout(() => {
        setIsExpanded(false);
      }, animationDuration);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [isExpanded, rootState.current],
  );

  return (
    <div ref={rootRef} className={cn(s.root, classes?.root)}>
      <div ref={contentRef} className={cn(s.content, s[color], { [s.expanded]: isExpanded }, classes?.content)}>
        <div className={s.headerWrap}>
          <div className={s.titleWrap}>{titleNode}</div>
          <div className={s.iconWrap}>
            <UiConditionalRender condition={isShowPlaylist} other={iconNode}>
              <button className={s.closeBtn} onClick={close}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.4684 4.54979C27.3 4.38104 27.1 4.24715 26.8797 4.1558C26.6595 4.06445 26.4235 4.01743 26.185 4.01743C25.9466 4.01743 25.7106 4.06445 25.4903 4.1558C25.2701 4.24715 25.0701 4.38104 24.9017 4.54979L16 13.4333L7.09833 4.53159C6.92979 4.36305 6.72972 4.22937 6.50951 4.13816C6.28931 4.04694 6.0533 4 5.81496 4C5.57662 4 5.3406 4.04694 5.1204 4.13816C4.9002 4.22937 4.70012 4.36305 4.53159 4.53159C4.36305 4.70012 4.22937 4.9002 4.13816 5.1204C4.04694 5.3406 4 5.57662 4 5.81496C4 6.0533 4.04694 6.28931 4.13816 6.50951C4.22937 6.72972 4.36305 6.92979 4.53159 7.09833L13.4333 16L4.53159 24.9017C4.36305 25.0702 4.22937 25.2703 4.13816 25.4905C4.04694 25.7107 4 25.9467 4 26.185C4 26.4234 4.04694 26.6594 4.13816 26.8796C4.22937 27.0998 4.36305 27.2999 4.53159 27.4684C4.70012 27.6369 4.9002 27.7706 5.1204 27.8618C5.3406 27.9531 5.57662 28 5.81496 28C6.0533 28 6.28931 27.9531 6.50951 27.8618C6.72972 27.7706 6.92979 27.6369 7.09833 27.4684L16 18.5667L24.9017 27.4684C25.0702 27.6369 25.2703 27.7706 25.4905 27.8618C25.7107 27.9531 25.9467 28 26.185 28C26.4234 28 26.6594 27.9531 26.8796 27.8618C27.0998 27.7706 27.2999 27.6369 27.4684 27.4684C27.6369 27.2999 27.7706 27.0998 27.8618 26.8796C27.9531 26.6594 28 26.4234 28 26.185C28 25.9467 27.9531 25.7107 27.8618 25.4905C27.7706 25.2703 27.6369 25.0702 27.4684 24.9017L18.5667 16L27.4684 7.09833C28.1602 6.40658 28.1602 5.24154 27.4684 4.54979Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </UiConditionalRender>
          </div>
        </div>
        <div className={s.textWrap}>{textNode}</div>

        <UiConditionalRender condition={isShowPlaylist}>{children}</UiConditionalRender>

        <UiConditionalRender condition={!isExpanded}>
          <div className={s.actionWrap}>{actionNode(open)}</div>
        </UiConditionalRender>
      </div>
    </div>
  );
};

export default forwardRef(GymExpandedBlock);

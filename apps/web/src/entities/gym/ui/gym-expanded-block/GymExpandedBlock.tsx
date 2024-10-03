import cn from "classnames";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import UiCloseButton from "@shared/ui/ui-close-button";
import UiConditionalRender from "@shared/ui/ui-conditional-render";

import s from "./GymExpandedBlock.module.scss";
import { GymExpandedBlockPropsType, GymExpandedBlockRefType } from "./types";

const animationDuration = 150;

const GymExpandedBlock = (
  {
    color = "secondary",
    classes = {},
    titleNode,
    iconNode,
    textNode,
    children,
    actionNode,
  }: GymExpandedBlockPropsType,
  ref: GymExpandedBlockRefType,
) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowPlaylist, setIsShowPlaylist] = useState(false);
  const [isShowCloseBtn, setIsShowCloseBtn] = useState(false);

  const open = useCallback(() => {
    if (!isExpanded && rootRef.current && contentRef.current) {
      const { width, height, top, left } =
        contentRef.current.getBoundingClientRect();

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

          setTimeout(() => setIsShowCloseBtn(true), 100);
          setTimeout(() => setIsShowPlaylist(true), 150);
        }
      });
    }
  }, [isExpanded]);
  const close = useCallback(() => {
    if (isExpanded && rootRef.current && contentRef.current) {
      const { width, height, top, left } =
        rootRef.current.getBoundingClientRect();

      setIsShowPlaylist(false);
      setIsShowCloseBtn(false);

      contentRef.current.style.width = width + "px";
      contentRef.current.style.height = height + "px";
      contentRef.current.style.top = top + "px";
      contentRef.current.style.left = left + "px";
      contentRef.current.style.borderRadius =
        rootRef.current.style.borderRadius + "px";

      setTimeout(() => {
        setIsExpanded(false);

        if (contentRef.current) {
          contentRef.current.style.width = "";
          contentRef.current.style.height = "";
          contentRef.current.style.top = "";
          contentRef.current.style.left = "";
          contentRef.current.style.borderRadius = "";
        }
      }, animationDuration);
    }
  }, [isExpanded]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [close, open],
  );

  return (
    <div ref={rootRef} className={cn(s.root, classes?.root)}>
      <div
        ref={contentRef}
        className={cn(
          s.content,
          s[color],
          { [s.expanded]: isExpanded },
          classes?.content,
        )}
      >
        <div className={s.headerWrap}>
          <div className={s.titleWrap}>{titleNode}</div>
          <div className={s.iconWrap}>
            <UiConditionalRender condition={isShowCloseBtn} other={iconNode}>
              <UiCloseButton onClick={close} className={s.closeBtn} />
            </UiConditionalRender>
          </div>
        </div>
        <div className={s.textWrap}>{textNode}</div>

        <UiConditionalRender condition={isShowPlaylist}>
          {children}
        </UiConditionalRender>

        <UiConditionalRender condition={!isExpanded}>
          <div className={s.actionWrap}>{actionNode(open)}</div>
        </UiConditionalRender>
      </div>
    </div>
  );
};

export default forwardRef(GymExpandedBlock);

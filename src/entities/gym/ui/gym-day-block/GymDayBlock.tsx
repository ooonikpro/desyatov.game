import React, { useRef } from "react";
import GymExpandedBlock from "@entities/gym/ui/gym-expanded-block";

import s from "./GymDayBlock.module.scss";

const GymDayBlock = ({
  title,
  description,
  actionButton,
}: {
  title: string;
  description: string;
  // eslint-disable-next-line no-unused-vars
  actionButton: (cb: () => void) => React.ReactNode;
}) => {
  const blockRef = useRef<{ open: () => void; close: () => void } | null>(null);

  return (
    <GymExpandedBlock
      ref={blockRef}
      titleNode={
        <>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </>
      }
      iconNode={
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_246_2330)">
            <path
              d="M29.2936 11.2989L28.0556 10.0608L28.9193 9.15031C29.1508 8.91998 29.2666 8.66026 29.2666 8.37114C29.2666 8.08323 29.1508 7.8235 28.9193 7.59197L24.4062 3.0807C24.1759 2.85036 23.9168 2.7352 23.6289 2.7352C23.3409 2.7352 23.0812 2.85036 22.8497 3.0807L21.9392 3.94444L20.6561 2.66142L21.6602 1.61233C22.1881 1.08448 22.8353 0.828357 23.6019 0.843952C24.3684 0.859548 25.0157 1.13067 25.5435 1.65731L30.3427 6.4583C30.8705 6.98615 31.1345 7.62556 31.1345 8.37654C31.1345 9.12752 30.8705 9.76693 30.3427 10.2948L29.2936 11.2989ZM10.2948 30.3427C9.76693 30.8705 9.12752 31.1345 8.37654 31.1345C7.62556 31.1345 6.98615 30.8705 6.4583 30.3427L1.79767 25.6821C1.24583 25.1302 0.969915 24.444 0.969915 23.6235C0.969915 22.8029 1.24583 22.1173 1.79767 21.5667L2.66142 20.7011L3.94624 21.9859L3.0699 22.8497C2.83957 23.0812 2.7244 23.3409 2.7244 23.6289C2.7244 23.9168 2.83957 24.1765 3.0699 24.408L7.59377 28.9301C7.8241 29.1616 8.08323 29.2774 8.37114 29.2774C8.65906 29.2774 8.91878 29.1616 9.15031 28.9301L10.0141 28.0556L11.2989 29.3386L10.2948 30.3427ZM27.809 18.0991L29.855 16.0531C30.0854 15.8228 30.2005 15.5576 30.2005 15.2577C30.2005 14.9578 30.0854 14.6927 29.855 14.4624L17.5376 2.14677C17.3073 1.91524 17.0422 1.79947 16.7423 1.79947C16.4424 1.79947 16.1772 1.91464 15.9469 2.14497L13.9009 4.19097C13.6706 4.4213 13.5554 4.68103 13.5554 4.97014C13.5554 5.25806 13.6706 5.51778 13.9009 5.74931L26.2525 18.0991C26.4828 18.3294 26.7419 18.4446 27.0299 18.4446C27.3178 18.4446 27.5775 18.3294 27.809 18.0991ZM16.0081 29.9L18.0541 27.8432C18.2844 27.6129 18.3996 27.3538 18.3996 27.0658C18.3996 26.7779 18.2844 26.5182 18.0541 26.2867L5.71332 13.9459C5.48299 13.7156 5.22327 13.6004 4.93415 13.6004C4.64623 13.6004 4.38711 13.7156 4.15678 13.9459L2.09998 15.9919C1.86965 16.2222 1.75449 16.4874 1.75449 16.7873C1.75449 17.0872 1.86965 17.3523 2.09998 17.5826L14.4174 29.8982C14.6477 30.1298 14.9128 30.2455 15.2127 30.2455C15.5126 30.2455 15.7778 30.1304 16.0081 29.9ZM14.7341 20.4114L20.3754 14.7791L17.2191 11.6246L11.5886 17.2659L14.7341 20.4114ZM17.2569 31.1722C16.7063 31.7241 16.0249 32 15.2127 32C14.4006 32 13.7186 31.7241 13.1667 31.1722L0.827757 18.8333C0.275919 18.2814 0 17.5994 0 16.7873C0 15.9751 0.275919 15.2937 0.827757 14.7431L2.87196 12.6629C3.42379 12.111 4.10999 11.8351 4.93055 11.8351C5.75111 11.8351 6.43671 12.111 6.98735 12.6629L10.3056 15.9811L15.9469 10.3398L12.6287 7.03233C12.0769 6.4805 11.8009 5.7931 11.8009 4.97014C11.8009 4.14718 12.0769 3.45978 12.6287 2.90795L14.7071 0.827757C15.2589 0.275919 15.9445 0 16.7639 0C17.5832 0 18.2694 0.275919 18.8225 0.827757L31.1722 13.1775C31.7241 13.7294 32 14.4156 32 15.2361C32 16.0567 31.7241 16.7423 31.1722 17.2929L29.0939 19.3731C28.542 19.9249 27.854 20.2009 27.0299 20.2009C26.2057 20.2009 25.5183 19.9249 24.9677 19.3731L21.6602 16.0531L16.0189 21.6944L19.3371 25.0127C19.889 25.5645 20.1649 26.2507 20.1649 27.0712C20.1649 27.8918 19.889 28.5774 19.3371 29.128L17.2569 31.1722Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_246_2330">
              <rect width="32" height="32" fill="transparent" />
            </clipPath>
          </defs>
        </svg>
      }
      actionNode={actionButton}
    >
      Video
    </GymExpandedBlock>
  );
};

export default GymDayBlock;

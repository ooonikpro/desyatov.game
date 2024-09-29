import React from "react";

// eslint-disable-next-line no-empty-pattern
export type InterviewPageType = ({}: {
  progress: React.ReactNode;
  secondaryAction: React.ReactNode;
  primaryAction: React.ReactNode;
}) => React.JSX.Element;

export type InterviewStateType = {
  isShow: boolean;
  step: number;
  pageComponents: Array<InterviewPageType>;
  answers: Record<string, any>;
};

export type InterviewMethodsType = {
  show: () => void;
  hide: () => void;
  nextStep: () => void;
  prevStep: () => void;

  setPageComponents: (components: Array<InterviewPageType>) => void;

  setAnswer: (key: string, value: any) => void;
};

import React from "react";

// eslint-disable-next-line no-empty-pattern
export type InterviewPage = ({}: {
  progress: React.ReactNode;
  secondaryAction: React.ReactNode;
  primaryAction: React.ReactNode;
}) => React.JSX.Element;

export type InterviewStateType = {
  isShow: boolean;
  step: number;
  pageComponents: Array<InterviewPage>;
  answers: Record<string, any>;
};

export type InterviewMethodsType = {
  show: () => void;
  hide: () => void;
  nextStep: () => void;
  prevStep: () => void;
  // eslint-disable-next-line no-unused-vars
  setPageComponents: (components: Array<InterviewPage>) => void;
  // eslint-disable-next-line no-unused-vars
  setAnswer: (key: string, value: any) => void;
};
